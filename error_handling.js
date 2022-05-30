function logUser() {
  try {
    console.log(user);
  } catch (error) {
    console.log(error.name);
    console.log(error.message);
  } finally {
    console.log("always");
  }
}

logUser();
