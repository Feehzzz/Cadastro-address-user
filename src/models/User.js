

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    id: {
      type: Datatypes.UUID,
      defaultValue: Datatypes.UUIDV4,
      primaryKey: true,
    },
    first_name: {
      type: Datatypes.STRING,
      validate: {
        notEmpty: {
          msg: "Cannot be blank"
        }
      }
    },
    last_name: {
      type: Datatypes.STRING,
      validate: {
        notEmpty: {
          msg: "Cannot be blank"
        }
      }
    },
    address: {
      type: Datatypes.JSON,
      address_one: {
        type: Datatypes.STRING
      },
      number: {
        type: Datatypes.STRING
      },
      address_two: {
        type: Datatypes.STRING
      },
      district: {
        type: Datatypes.STRING
      },
      city: {
        type: Datatypes.STRING
      },
      zip: {
        type: Datatypes.STRING
      }
    },
  }
  );
  return User;
}