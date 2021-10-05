const Customer = require('./Customer');
const Itmember = require('./Itmember');
const Ticket = require('./Ticket');

// Ticket belongsTo Customer
Ticket.belongsTo(Customer, {
  foreignKey: 'customer_id'
});

// Ticket belongsTo ItMember
Ticket.belongsTo(Itmember, {
    foreignKey: 'itmember_id'
  });

// Customer have many Tickets
Customer.hasMany(Ticket, {
  foreignKey: 'ticket_id'
});

// Itmemer have many Tickets
Itmember.hasMany(Ticket, {
    foreignKey: 'ticket_id'
  });

// Products belongToMany Tags (through ProductTag)
/*
Product.belongsToMany(Tag, {
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id'
});
*/

module.exports = {
  Customer,
  Itmember,
  Ticket,
};