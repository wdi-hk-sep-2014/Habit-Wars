if (Items.find().count() === 0 ){

  Items.insert({
    name: "Leather Helm",
    type: "head",
    health: 10,
    strength: 2,
    intelligence: 4
  });

  Items.insert({
    name: "Cloth Robe",
    type: "chest",
    health: 5,
    strength: 0,
    intelligence: 2
  });

  Items.insert({
    name: "Leather Shoulder Pads",
    type: "head",
    health: 10,
    strength: 2,
    intelligence: 4
  });

  Items.insert({
    name: "Iron Boots",
    type: "feet",
    health: 12,
    strength: 2,
    intelligence: 0
  });

  Items.insert({
    name: "Wooden Sword",
    type: "weapon",
    health: 5,
    strength: 8,
    intelligence: 0
  });

  Items.insert({
    name: "Long Sword",
    type: "head",
    health: 14,
    strength: 12,
    intelligence: 2
  });

}