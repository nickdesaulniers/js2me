(function () {
	function ByteArrayOutputStream() {
		this.buffer = [];
	}
	ByteArrayOutputStream.prototype = {
		_init__V: function () {
		},
		$write_I_V: function (b) {
			this.buffer.push(b & 0xff);
		},
		superClass: 'javaRoot.$java.$io.$OutputStream',
		//__proto__: javaRoot.$java.$io.$OutputStream.prototype
	};
	js2me.findPackage('javaRoot.$java.$io')['$ByteArrayOutputStream'] = ByteArrayOutputStream ;
})();

