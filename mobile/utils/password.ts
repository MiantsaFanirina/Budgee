// Determine password strength based on diversity and length
export const checkPasswordStrength = (password: string): string => {
    const hasLetters = /[a-zA-Z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSymbols = /[^a-zA-Z0-9]/.test(password);

    if (password.length < 6) return "Weak";
    if (hasLetters && hasNumbers && password.length >= 8) return "Strong";
    if ((hasLetters || hasNumbers) && password.length >= 6) return "Normal";
    return "Weak";
};

// Get text color based on strength label
export const getPasswordColor = (strength: string): string => {
    switch (strength) {
        case "Weak":
            return "red";
        case "Normal":
            return "orange";
        case "Strong":
            return "green";
        default:
            return "gray";
    }
};
