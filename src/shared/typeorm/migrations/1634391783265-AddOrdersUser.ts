import {MigrationInterface, QueryRunner, TableForeignKey} from "typeorm";

export class AddOrdersUser1634391783265 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createForeignKey('orders',new TableForeignKey({
            name: 'UserOrders', //Nome da relacao
            columnNames: ['id_user'], // Coluna da tabela orders
            referencedColumnNames: ['id'], //Coluna que eu quero utilizar de users (parâmetro unique: ID)
            referencedTableName: 'users', //Tabela que eu quero relacionar
            onDelete: 'SET NULL' //Como eu quero deletar, verifique documentacao
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('orders', 'UserOrders')
    }

}
