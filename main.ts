interface User {
    id: number;
    username: string;
    email: string;
  }

  class UserManager {
    private users: User[] = [];
  
    addUser(user: User): void {
      this.users.push(user);
    }
  
    getUsers(): User[] {
      return this.users;
    }
  }

  function displayUsers(users: User[]): void {
    console.log("Список пользователей:");
    users.forEach((user) => {
      console.log(`ID: ${user.id}, Имя пользователя: ${user.username}, Email: ${user.email}`);
    });
  }

  const userManager = new UserManager();
  userManager.addUser({ id: 1, username: "john_doe", email: "john@example.com" });
  userManager.addUser({ id: 2, username: "jane_smith", email: "jane@example.com" });
  
  const allUsers = userManager.getUsers();
  displayUsers(allUsers);
