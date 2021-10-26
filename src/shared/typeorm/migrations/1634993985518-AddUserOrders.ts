import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddUserOrders1634993985518 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('users',new TableForeignKey({
            name: 'OrdersUser', //Nome da relacao
            columnNames: ['orders'], // Coluna da tabela orders
            referencedColumnNames: ['id'], //Coluna que eu quero utilizar de users (parâmetro unique: ID)
            referencedTableName: 'orders', //Tabela que eu quero relacionar
            onDelete: 'SET NULL' //Como eu quero deletar, verifique documentacao
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('users', 'OrdersUser')
    }

}
