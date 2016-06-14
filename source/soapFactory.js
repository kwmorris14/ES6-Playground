var SoapFactory = function (){
	
	var constructors = {

		"original" : function(scent){
			this.scent = scent;
		},
		"lemon" : function(scent){
			this.scent = scent;
		},
		"peach" : function(scent){
			this.scent = scent;
		},
		"pomegranate" : function(scent){
			this.scent = scent;
		}

	};

	return {

		"create" : function (scent){

			return new constructors[scent](scent);

		}

	}

}

var factory = new SoapFactory();

var originalSoap = factory.create("original");
