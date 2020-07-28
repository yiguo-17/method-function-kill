const {
  newPerson,
} = require('./main.js')


describe('newPerson', () => {
  it(`returns an object`, () => {
    const person1 = newPerson();
    expect(typeof person1).toBe('object')
  })
})

describe('person.firstName', () => {
  it(`is set to the first argument passed in to newPerson`, () => {
    const person1 = newPerson('Colin');
    const person2 = newPerson('Mesuara');
    expect(person1.firstName).toBe('Colin')
    expect(person2.firstName).toBe('Mesuara')
  })

  it(`is set to 'Anonymous' if no parameters are passed in to newPerson`, () => {
    const person1 = newPerson();
    expect(person1.firstName).toBe('Anonymous')
    expect(person1.lastName).toBe('Person')
  })
})

describe('person.lastName', () => {
  it(`is set to the second argument passed in to newPerson`, () => {
    const person1 = newPerson('Colin', 'Jaffe');
    const person2 = newPerson('Mesuara', 'Kaleziq');
    expect(person1.lastName).toBe('Jaffe')
    expect(person2.lastName).toBe('Kaleziq')
  })
})

describe(`person.age`, () => {
  it(`is set to the third parameter passed in to the newPerson function`, () => {
    const person1 = newPerson('John', 'Smith', 53);
    const person2 = newPerson('Marley', 'Jones', 45);
    expect(person1.age).toBe(53);
    expect(person2.age).toBe(45);
  })
})

describe(`person.married`, () => {
  it(`is set to the fourth parameter passed in to the newPerson function`, () => {
    const person1 = newPerson('John', 'Smith', 53, true);
    const person2 = newPerson('Biggie', 'Smalls', 58, false);
    const person3 = newPerson('Indiana', 'Jones', 18, true);

    expect(person1.married).toBe(true)
    expect(person2.married).toBe(false)
    expect(person3.married).toBe(true)
  })

  it(`is set to false by default`, () => {
    const person1 = newPerson('John', 'Smith', 53);
    const person2 = newPerson('Indiana', 'Jones', 18);

    expect(person1.married).toBe(false)
    expect(person2.married).toBe(false)
  })
})

describe(`person.goingOn`, () => {
  it(`is a function`, () => {
    const person1 = newPerson();
    expect(typeof person1.goingOn).toBe('function')
  })

  it(`returns the age the person will be at their next birthday`, () => {
    const person1 = newPerson('Alice', 'Jaffe', 2);
    const person2 = newPerson('Maisie', 'Jaffe', 7);
    expect(person1.goingOn()).toBe(3)
    expect(person2.goingOn()).toBe(8)
  })

  it(`doesn't change the person's age`, () => {
    const person1 = newPerson('Alice', 'Jaffe', 2);
    const person2 = newPerson('Elizabeth', 'Cho', 30);
    person1.goingOn();
    person2.goingOn();
    expect(person1.age).toBe(2);
    expect(person2.age).toBe(30);
  })
})

describe(`person.ageUp`, () => {
  it(`is a function`, () => {
    const person1 = newPerson();
    expect(typeof person1.ageUp).toBe('function')
  })

  it(`increments the person's age by 1`, () => {
    const person1 = newPerson('Alice', 'Jaffe', 2);
    const person2 = newPerson('Maisie', 'Jaffe', 7);
    person1.ageUp()
    person2.ageUp()
    expect(person1.age).toBe(3)
    expect(person2.age).toBe(8)
  })
})

describe('person.getFullName', () => {
  it(`returns the person's first name and last name, with a space in the middle`, () => {
    const person1 = newPerson('Colin', 'Jaffe');
    const person2 = newPerson('Mesuara', 'Kaleziq');
    expect(person1.getFullName()).toBe('Colin Jaffe')
    expect(person2.getFullName()).toBe('Mesuara Kaleziq')
  })

  it(`responds to changes in firstName and lastName`, () => {
    const person1 = newPerson('Colin', 'Jaffe');
    const person2 = newPerson('Mesuara', 'Kaleziq');
    expect(person1.getFullName()).toBe('Colin Jaffe')
    expect(person2.getFullName()).toBe('Mesuara Kaleziq')
    person1.firstName = 'Danger';
    person2.lastName = 'The Great';
    expect(person1.getFullName()).toBe('Danger Jaffe')
    expect(person2.getFullName()).toBe('Mesuara The Great')
  })
})

describe('marry', () => {
  it(`sets the person's married status to married`, () => {
    const person1 = newPerson();
    const person2 = newPerson();
    person1.marry(person2)
    expect(person1.married).toBe(true);
  })

  it(`sets the given person's married status to married`, () => {
    const person1 = newPerson();
    const person2 = newPerson();
    person1.marry(person2);
    expect(person2.married).toBe(true);
  })
  
  it(`sets the person's spouseName to be the full name of the given person`, () => {
    const person1 = newPerson('Peter', 'Parker');
    const person2 = newPerson('Mary', 'Jane');
    const person3 = newPerson('Clark', 'Kent');
    const person4 = newPerson('Lois', 'Lane');
    person1.marry(person2);
    person4.marry(person3);
    expect(person1.spouseName).toBe('Mary Jane');
    expect(person4.spouseName).toBe('Clark Kent');
  })

  it(`sets the given person's spouseName to be the full name of the original person`, () => {
    const person1 = newPerson('Peter', 'Parker');
    const person2 = newPerson('Mary', 'Jane');
    const person3 = newPerson('Clark', 'Kent');
    const person4 = newPerson('Lois', 'Lane');
    person1.marry(person2);
    person4.marry(person3);
    expect(person2.spouseName).toBe('Peter Parker');
    expect(person3.spouseName).toBe('Lois Lane');
  })
})

describe('divorce', () => {
  it(`sets the person's marital status to not married`, () => {
    const person1 = newPerson('Peter', 'Parker');
    const person2 = newPerson('Mary', 'Jane');
    const person3 = newPerson('Clark', 'Kent');
    const person4 = newPerson('Lois', 'Lane');
    person1.marry(person2);
    person4.marry(person3);
    person1.divorce(person2);
    person3.divorce(person3);
    expect(person1.married).toBe(false)
    expect(person3.married).toBe(false)
  })

  it(`sets the marital status of the given person to not married`, () => {
    const person1 = newPerson('Peter', 'Parker');
    const person2 = newPerson('Mary', 'Jane');
    const person3 = newPerson('Clark', 'Kent');
    const person4 = newPerson('Lois', 'Lane');
    person1.marry(person2);
    person4.marry(person3);
    person1.divorce(person2);
    person3.divorce(person4);
    expect(person2.married).toBe(false)
    expect(person4.married).toBe(false)
  })

  it(`removes the person's spouseName property entirely`, () => {
    const person1 = newPerson('Peter', 'Parker');
    const person2 = newPerson('Mary', 'Jane');
    const person3 = newPerson('Clark', 'Kent');
    const person4 = newPerson('Lois', 'Lane');
    person1.marry(person2)
    person4.marry(person3)
    person1.divorce(person2);
    person4.divorce(person3);
    expect('spouseName' in person1).toBe(false)
    expect('spouseName' in person2).toBe(false)
    expect('spouseName' in person3).toBe(false)
    expect('spouseName' in person4).toBe(false)
  })
})
