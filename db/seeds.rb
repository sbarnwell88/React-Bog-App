Pet.destroy_all
Creature.destroy_all

luke = Creature.create({name: "Luke", description: "Jedi"})
darth = Creature.create({name: "Darth Vader", description: "Father of Luke"})

doggy = Pet.create({name: "doggy" })
tarantula = Pet.create({name: "tarantula" })

luke.pets = [
    doggy
]

darth.pets = [
    tarantula
]




