export default function verifyArguments(fields: any[]): boolean {
    let valid = true;
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] === undefined) {
            valid = false;
            break;
        }
    }
    return valid;
}