const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = mongoose.Schema(
    { name:{type:String, required:true},
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true }
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

  
  
  adminSchema.pre("save", function (next) {
    const hash = bcrypt.hashSync(this.password, 8);
    this.password = hash;
    return next();
  });

  adminSchema.methods.checkPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;