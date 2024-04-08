import { consult } from "../database/connection.js";

class SelecaoRepository {
    // CRUD
    create(selecao) {
        const sql = "INSERT INTO selecoes SET ?;"
        return consult(sql, selecao, "Não foi possivel cadastrar!")
    }

    findAll() {
        const sql = "SELECT * FROM selecoes;"
        return consult(sql, "Não foi possivel localizar!")
    }

    findById(id) {
        const sql = "SELECT * FROM selecoes WHERE id=?;"
        return consult(sql, id, "Não foi possivel localizar!")
    }

    update(selecao, id) {
        const sql = "UPDATE selecoes SET ? WHERE id=?;"
        return consult(sql, [selecao, id], "Não foi possivel atualizar!")
    }

    delete(id) {
        const sql = "DELETE FROM selecoes WHERE id=?;"
        return consult(sql, id, "Não foi possivel remover!")        
    }
};

export default new SelecaoRepository()