function checkForCredentials(emailId, pwd) {
    const allUserList = JSON.parse(window.localStorage.getItem(`carWash_${emailId}`) || '{}');
    const { userId, password } = allUserList;
    if (userId && password === pwd) return true;
    return false;
}

function getCurrentUser() {
    const user = JSON.parse(window.localStorage.getItem(`user`) || '{}');
    if (user.userId) {
        return user;
    }
    return null;

}

export { checkForCredentials, getCurrentUser };