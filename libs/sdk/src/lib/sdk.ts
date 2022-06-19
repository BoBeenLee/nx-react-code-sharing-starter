export class SDK {
  constructor(public loggedInUserId?: string) {}

  createTodo() {
    this.asswertUserIsLoggedIn();
    console.log('loggedInUserId is string', this.loggedInUserId);
  }

  asswertUserIsLoggedIn(): asserts this is this & {
    loggedInUserId: string;
  } {
    if (!this.loggedInUserId) {
      throw new Error('User is not logged in');
    }
  }
}
