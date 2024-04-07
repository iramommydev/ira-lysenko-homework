const users = [];

class User {
  constructor(name, role = 'user') {
    this.name = name;
    this.role = role;
    this.password = 'defaultPassword';
    // users.push(this);

    // if (role !== 'admin' && role !== 'user') {
    //   alert('Некоректно введена роль: ' + role);
    //   this.role = 'user';
    // } else {
    //   this.role = role;
    // }
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  login() {
    console.log(`${this.name} увійшов в систему як ${this.role}.`);
  }

  logout() {
    console.log(`${this.name} вийшов з системи.`);
  }

  changeName(newName) {
    this.name = newName;
  }

  changePassword(newPassword) {
    this.password = newPassword;
  }
}

class Admin extends User {
  constructor(name) {
    super(name, 'admin');
  }

  addUser(name, role) {
    if (role == 'user') {
      users.push(new User(name));
    } else if (role == 'admin') {
      users.push(new Admin(name));
    } else console.log('Некоректно введена роль: ' + role);
  }

  removeUser(userName) {
    const index = users.findIndex((user) => user.name === userName);
    if (index !== -1) {
      users.splice(index, 1);
    }
  }

  changeUserRole(userName, newRole) {
    const user = users.find((user) => user.name === userName);
    if (user) {
      user.role = newRole;
    } else {
      console.log('немає такого користувача');
    }
  }
  getAllUsers() {
    return [...users];
  }
  removeAllUsers() {
    users = [];
  }
}
// function signUp(name, role) {
//   if (role == 'user') {
//     users.push(new User(name));n  
//   } else if (role == 'admin') {
//     users.push(new Admin(name));
//   } else console.log('Некоректно введена роль: ' + role);
// }

export { User, Admin};
