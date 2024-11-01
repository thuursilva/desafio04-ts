export interface User {
    name: string
    email: string
}

const db = [
    {
        name: "Joana",
        email: "joana@dio.com",
    }
]

export class UserService {
    db: User[]

    constructor(
        database = db
    ){
        this.db = database
    }

    createUser = (name: string, email: string) => {
        const user = {
            name,
            email
        }

        this.db.push(user)
        console.log('DB atualizado', this.db)
    }

    getAllUsers = () => {
        return this.db
    }

    deleteUser = (name: string, email:string) => {
        const user = {
            name,
            email
        }

        const index = this.db.indexOf(user)
        this.db.splice(index)
        console.log('Usuário removido')
        console.log('DB atualizado', this.db)
    }
}

