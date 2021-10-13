import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrdersTable1633962356152 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'orders',
                columns: [
                    {
                        name: 'id',
                        type: 'bigserial',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    }, 
                    {
                        name: 'id_user',
                        type: 'bigserial',
                    },
                    {
                        name: 'user_name',
                        type: 'varchar',
                    },
                    {
                        name: 'user_document',
                        type: 'integer',
                    },
                    {
                        name: 'products',
                        type: 'bigserial',
                    },
                    {
                        name: 'total_price',
                        type: 'number'
                    },
                    {
                        name: 'payment_method',
                        type: 'number'
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'update_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('orders')
    }
}
