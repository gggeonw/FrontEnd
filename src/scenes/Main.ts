import { IMAGE_MAIN, MAP_MAIN } from "@constants/assets";
import { DOWN } from "@constants/directions";
import { IPosition } from "@constants/position";
import { MAIN } from "@constants/scenes";
import BaseScene from "utilities/base-secne";

class Main extends BaseScene {
    constructor() {
        super(MAIN);
    }

    init(data: IPosition) {
        super.init(this.getPosition(data));
    }

    create() {
        super.create(MAP_MAIN, IMAGE_MAIN, false);
    }

    registerCollision() {
        /* River */
        this.layers[6].setCollisionBetween(0, 1021);

        /* House 1 */
        this.layers[7].setCollisionBetween(105, 110);
        this.layers[7].setCollisionBetween(125, 130);
        this.layers[7].setCollisionBetween(145, 150);
        this.layers[7].setCollisionBetween(165, 170);

        /* House 2 */
        this.layers[7].setCollisionBetween(207, 207);
        this.layers[7].setCollisionBetween(226, 228);
        this.layers[7].setCollisionBetween(245, 249);
        this.layers[7].setCollisionBetween(264, 270);
        this.layers[7].setCollisionBetween(284, 290);
        this.layers[7].setCollisionBetween(304, 310);
        this.layers[7].setCollisionBetween(324, 330);
        this.layers[7].setCollisionBetween(344, 350);
        this.layers[7].setCollisionBetween(1661, 1663);

        /* Camps */
        this.layers[8].setCollisionBetween(5, 25);

        /* Trees */
        this.layers[9].setCollisionBetween(213, 215);
        this.layers[9].setCollisionBetween(233, 256);
        this.layers[9].setCollisionBetween(273, 296);

        // let player = this.player.players[this.player.socket.id];

        // this.physics.add.collider(player, this.layers[6]);
        // this.physics.add.collider(player, this.layers[8]);
        // this.physics.add.collider(player, this.layers[9]);
        // this.physics.add.collider(
        //     player,
        //     this.layers[7],
        //     (sprite, tile: any) => {
        //         if (tile.index === 167) {
        //             this.nextSceneKey = HOUSE_1;
        //             this.onChangeScene();
        //         } else if (tile.index === 1661 || tile.index === 1662) {
        //             this.nextSceneKey = HOUSE_2;
        //             this.onChangeScene();
        //         }
        //     }
        // );
    }

    getPosition(data: IPosition | string): IPosition {
        return {
            x: 0,
            y: 0,
            direction: DOWN,
        };
    }
}

export default Main;