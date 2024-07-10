
    module.exports = function (app) {
        const modelName = 'fundname';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            Fund: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false, default: '' },
Inception: { type: Date, required: false },
Manager: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false, default: '' },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };