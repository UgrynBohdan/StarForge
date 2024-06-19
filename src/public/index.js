
        const tryRequire = (path) => {
        	try {
        	const image = require(`${path}`);
        	return image
        	} catch (err) {
        	return false
        	}
        };

        export default {
	questionMark: require('./questionMark.png'),
	resume: tryRequire('./resume.pdf') || require('./questionMark.png'),
	author: tryRequire('./author.jpg') || require('./questionMark.png'),
	Home_image2: tryRequire('./Home_image2.png') || require('./questionMark.png'),
	Help_image3: tryRequire('./Help_image3.png') || require('./questionMark.png'),
	Home_image4: tryRequire('./Home_image4.png') || require('./questionMark.png'),
	Home_image5: tryRequire('./Home_image5.png') || require('./questionMark.png'),
	Home_image6: tryRequire('./Home_image6.png') || require('./questionMark.png'),
	Home_image7: tryRequire('./Home_image7.png') || require('./questionMark.png'),
	Storage_Line1: tryRequire('./Storage_Line1.png') || require('./questionMark.png'),
	Storage_Vector: tryRequire('./Storage_Vector.png') || require('./questionMark.png'),
	Storage_Vector_1: tryRequire('./Storage_Vector_1.png') || require('./questionMark.png'),
	Storage_Vector_2: tryRequire('./Storage_Vector_2.png') || require('./questionMark.png'),
	Storage_Vector_3: tryRequire('./Storage_Vector_3.png') || require('./questionMark.png'),
	Storage_Vector_4: tryRequire('./Storage_Vector_4.png') || require('./questionMark.png'),
	Storage_Vector_5: tryRequire('./Storage_Vector_5.png') || require('./questionMark.png'),
	Storage_Vector_6: tryRequire('./Storage_Vector_6.png') || require('./questionMark.png'),
	Storage_Vector_7: tryRequire('./Storage_Vector_7.png') || require('./questionMark.png'),
	Storage_Vector_8: tryRequire('./Storage_Vector_8.png') || require('./questionMark.png'),
	Storage_Vector_9: tryRequire('./Storage_Vector_9.png') || require('./questionMark.png'),
	Storage_Vector_10: tryRequire('./Storage_Vector_10.png') || require('./questionMark.png'),
	Storage_Vector_11: tryRequire('./Storage_Vector_11.png') || require('./questionMark.png'),
	Storage_Vector_12: tryRequire('./Storage_Vector_12.png') || require('./questionMark.png'),
	Storage_Vector_13: tryRequire('./Storage_Vector_13.png') || require('./questionMark.png'),
	Storage_Vector_14: tryRequire('./Storage_Vector_14.png') || require('./questionMark.png'),
	Storage_Vector_15: tryRequire('./Storage_Vector_15.png') || require('./questionMark.png'),
	Storage_Vector_16: tryRequire('./Storage_Vector_16.png') || require('./questionMark.png'),
	Storage_Vector_17: tryRequire('./Storage_Vector_17.png') || require('./questionMark.png'),
	Storage_Vector_18: tryRequire('./Storage_Vector_18.png') || require('./questionMark.png'),
	Storage_Vector_19: tryRequire('./Storage_Vector_19.png') || require('./questionMark.png'),
	Storage_Vector_20: tryRequire('./Storage_Vector_20.png') || require('./questionMark.png'),
	Storage_Vector_21: tryRequire('./Storage_Vector_21.png') || require('./questionMark.png'),
	Storage_Vector_22: tryRequire('./Storage_Vector_22.png') || require('./questionMark.png'),
	Storage_Vector_23: tryRequire('./Storage_Vector_23.png') || require('./questionMark.png'),
	Storage_Vector_24: tryRequire('./Storage_Vector_24.png') || require('./questionMark.png'),
	Storage_Vector_25: tryRequire('./Storage_Vector_25.png') || require('./questionMark.png'),
	Storage_Vector_26: tryRequire('./Storage_Vector_26.png') || require('./questionMark.png'),
	Storage_Vector_27: tryRequire('./Storage_Vector_27.png') || require('./questionMark.png'),
	Storage_Vector_28: tryRequire('./Storage_Vector_28.png') || require('./questionMark.png'),
}