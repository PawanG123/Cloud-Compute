// Employee_ID_Number, First_Name, Last_Name, Date_of_Birth, Contact_Number 
module.exports = (sequelize, Sequelize) => {
  const Pawankumar_111915085_details = sequelize.define("pawankumar_111915085_details", {
    employee_id_number: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
      field: 'employee_id_number'
    },
    first_name: {
      type: Sequelize.STRING
    },
    last_lame: {
      type: Sequelize.STRING
    },
    date_of_birth: {
      type: Sequelize.DATE
    },
    contact_number: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  return Pawankumar_111915085_details;
};


