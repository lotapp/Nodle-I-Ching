import { Locator } from "../";
import { loadPng } from "../../../../fileHelpers";
import { singleChannelToBitMatrix } from "../../../../testHelpers";
import { nearlySame } from "../../../geometry";
import { PatternsLocation } from "../../PatternsLocation";

const MAX_VARIANCE = 3;

const nearlySamePatterns = (real: PatternsLocation, expected: PatternsLocation): boolean => {
    return (
        nearlySame(real.bottomLeft, expected.bottomLeft, MAX_VARIANCE) &&
        nearlySame(real.topRight, expected.topRight, MAX_VARIANCE) &&
        nearlySame(real.topLeft, expected.topLeft, MAX_VARIANCE) &&
        nearlySame(real.bottomRight, expected.bottomRight, MAX_VARIANCE)
    );
};

describe("locate", () => {

    it('locates batterns in "perfect_no_alignment" image', async () => {
        const expected: PatternsLocation = {
            bottomLeft: { x: 129, y: 1071 },
            topRight: { x: 1071, y: 129 },
            topLeft: { x: 130, y: 130 },
            bottomRight: null,
            finderAverageSize: 0,
            alignmentSize: null,
        };
        expected.bottomRight = {
            x: expected.topRight.x - expected.topLeft.x + expected.bottomLeft.x,
            y: expected.topRight.y - expected.topLeft.y + expected.bottomLeft.y,
        };

        const img = await loadPng("./test_data/binarized/perfect_no_alignment.png");
        const matrix = singleChannelToBitMatrix(img);
        const locator = new Locator();
        const real = locator.locate(matrix);

        expect(nearlySamePatterns(real, expected)).toBeTruthy();
    });

    it('locates batterns in "noise_cleared" image', async () => {
        const expected: PatternsLocation = {
            bottomLeft: { x: 1931, y: 2410 },
            topRight: { x: 3263, y: 1075 },
            topLeft: { x: 1939, y: 1054 },
            bottomRight: null,
            finderAverageSize: 0,
            alignmentSize: null,
        };
        expected.bottomRight = {
            x: expected.topRight.x - expected.topLeft.x + expected.bottomLeft.x,
            y: expected.topRight.y - expected.topLeft.y + expected.bottomLeft.y,
        };

        const img = await loadPng("./test_data/binarized/noise_cleared.png");
        const matrix = singleChannelToBitMatrix(img);
        const locator = new Locator();
        const real = locator.locate(matrix);

        expect(nearlySamePatterns(real, expected)).toBeTruthy();
    });

    it('locates batterns in "noisy" image', async () => {
        const expected: PatternsLocation = {
            bottomLeft: { x: 1932, y: 2410 },
            topRight: { x: 3264, y: 1075 },
            topLeft: { x: 1940, y: 1054 },
            bottomRight: null,
            finderAverageSize: 0,
            alignmentSize: null,
        };
        expected.bottomRight = {
            x: expected.topRight.x - expected.topLeft.x + expected.bottomLeft.x,
            y: expected.topRight.y - expected.topLeft.y + expected.bottomLeft.y,
        };

        const img = await loadPng("./test_data/binarized/noisy.png");
        const matrix = singleChannelToBitMatrix(img);
        const locator = new Locator();
        const real = locator.locate(matrix);

        expect(nearlySamePatterns(real, expected)).toBeTruthy();
    });

    it('locates batterns in "bin1" image', async () => {
        const expected: PatternsLocation = {
            bottomLeft: { x: 1637, y: 2372 },
            topRight: { x: 1552, y: 1144 },
            topLeft: { x: 980, y: 1799 },
            bottomRight: null,
            finderAverageSize: 0,
            alignmentSize: null,
        };
        expected.bottomRight = {
            x: expected.topRight.x - expected.topLeft.x + expected.bottomLeft.x,
            y: expected.topRight.y - expected.topLeft.y + expected.bottomLeft.y,
        };

        const img = await loadPng("./test_data/binarized/bin1.png");
        const matrix = singleChannelToBitMatrix(img);
        const locator = new Locator();
        const real = locator.locate(matrix);

        expect(nearlySamePatterns(real, expected)).toBeTruthy();
    });

    it('locates batterns in "bin2" image', async () => {
        const expected: PatternsLocation = {
            bottomLeft: { x: 2518, y: 1641 },
            topRight: { x: 819, y: 2529 },
            topLeft: { x: 2229, y: 2959 },
            bottomRight: null,
            finderAverageSize: 0,
            alignmentSize: null,
        };
        expected.bottomRight = {
            x: expected.topRight.x - expected.topLeft.x + expected.bottomLeft.x,
            y: expected.topRight.y - expected.topLeft.y + expected.bottomLeft.y,
        };

        const img = await loadPng("./test_data/binarized/bin2.png");
        const matrix = singleChannelToBitMatrix(img);
        const locator = new Locator();
        const real = locator.locate(matrix);

        expect(nearlySamePatterns(real, expected)).toBeTruthy();
    });

    it('locates batterns in "bin3" image', async () => {
        const expected: PatternsLocation = {
            bottomLeft: { x: 2699, y: 2229 },
            topRight: { x: 596, y: 1633 },
            topLeft: { x: 1346, y: 2878 },
            bottomRight: null,
            finderAverageSize: 0,
            alignmentSize: null,
        };
        expected.bottomRight = {
            x: expected.topRight.x - expected.topLeft.x + expected.bottomLeft.x,
            y: expected.topRight.y - expected.topLeft.y + expected.bottomLeft.y,
        };

        const img = await loadPng("./test_data/binarized/bin3.png");
        const matrix = singleChannelToBitMatrix(img);
        const locator = new Locator();
        const real = locator.locate(matrix);

        expect(nearlySamePatterns(real, expected)).toBeTruthy();
    });

});
