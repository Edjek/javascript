export default function helloUserDefault() {
    let message = 'Je suis un module exporté par défaut';
    console.log(message);
}

export function helloUser(user) {
    let message = `Je suis un module créé avec ${user}`;
    console.log(message);
}

export const firstName = 'John';