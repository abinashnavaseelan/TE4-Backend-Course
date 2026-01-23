export const validateUserData = (data: any): boolean => {
    if (
        typeof data.name === "string" &&
        typeof data.email === "string" &&
        typeof data.age === "number" &&
        data.age >= 0 &&
        data.age <= 122
    ) {
        return true;
    }
    return false;
};