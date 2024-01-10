var UserManager = /** @class */ (function () {
    function UserManager() {
        this.users = [];
    }
    UserManager.prototype.addUser = function (user) {
        this.users.push(user);
    };
    UserManager.prototype.getUsers = function () {
        return this.users;
    };
    return UserManager;
}());
function displayUsers(users) {
    console.log("Список пользователей:");
    users.forEach(function (user) {
        console.log("ID: ".concat(user.id, ", \u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F: ").concat(user.username, ", Email: ").concat(user.email));
    });
}
var userManager = new UserManager();
userManager.addUser({ id: 1, username: "john_doe", email: "john@example.com" });
userManager.addUser({ id: 2, username: "jane_smith", email: "jane@example.com" });
var allUsers = userManager.getUsers();
displayUsers(allUsers);
