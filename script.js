var calculations = {
    salasySum: function() {
      return this.reduce(function(acc, next) {
        return acc + next;
      }, 0);
    },
    logName: function() {
      this.forEach(function(user) {
        console.log(user.name);
      });
    },
    findUsersByIds: function(ids) {
      return this.filter(function(user) {
        return ids.find(function(id) {
            return user.id === id;
        })
      });
    }
  };
  
  var users = [
    {
      id: 1,
      name: "User 2",
      salary: 200
    },
    {
      id: 2,
      name: "User 3",
      salary: 200
    },
    {
      id: 3,
      name: "User 4",
      salary: 200
    }
  ];

  calculations.salasySum.apply(users);

  let salarys = users.map((value)=>{
    return value.salary;
  });
  console.log(calculations.salasySum.call(salarys));

  calculations.logName.call(users);

  console.log(calculations.findUsersByIds.call(users, [1, 2, 3]));