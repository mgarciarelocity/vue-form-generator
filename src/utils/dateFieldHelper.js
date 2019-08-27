import fecha from "fecha";

export default {
	formatValueToField(value) {
		if (value != null) {
			let dt = this.schema.format ? fecha.parse(value, this.schema.format) : new Date(value);
			return fecha.format(dt, this.getDateFormat());
		}

		return value;
	},

	formatValueToModel(value) {
		if (value != null) {
			// if you would prefer to do your own parsing of the dates using your own parser IE if you use moment
			if (typeof this.schema.ignoreFormat !== 'undefined' && this.schema.ignoreFormat) {
				return value;
			} else {
				let m = fecha.parse(value, this.getDateFormat());
				if (this.schema.format) {
					value = fecha.format(m, this.schema.format);
				} else {
					value = m.valueOf();
				}
			}
		}
		return value;
	}
};
