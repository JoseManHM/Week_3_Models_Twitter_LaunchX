const User = require('./../../app/models/User');

describe("Unit test for user class", () => {
    test("Create an User object", () => {
        //Invoca código que se va a usar en la app
        const user = new User(1, "carlogilmar", "Carlo", "Bio")
        //Aquí se validan los resultados de ese código
        //Está es una comparación que va a igualar el valor de la izquierda con el valor de la derecha (valor esperado)
        expect(user.getUsername).toBe("carlogilmar");
        expect(user.getBio).toBe("Bio");
        expect(user.dateCreated).not.toBeUndefined();//Verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined();
        user.setUsername = "Gilmar";
        expect(user.username).toBe("Gilmar");
        user.setBio = "New bio";
        expect(user.bio).toBe("New bio");
    });
});