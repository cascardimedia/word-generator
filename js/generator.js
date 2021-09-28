// Word Generator JS
wordGen = {
    "req" : function(inputParams) {
        Object.assign(this.reqParams, inputParams);
        jQuery.get('app.php', this.reqParams, this.updateText);
    },

    "importParams" : {
        "type" : 'hipster-latin',
        "paras" : 15,
        "start" : 1
    },

    "reqParams" : {
        action :  'import',
        text : ''
    },

    "import" : function() {
        this.reqParams.action = 'import';
        this.reqParams.text = null;
        this.importParams.type = $('input[name=type]').val();
        this.importParams.paras = $('input[name=paras]').val();
        this.importParams.start  = $('input[name=start]').val();
        this.req(this.importParams);
    },

    "reverse"  : function() {
        this.reqParams.action = 'reverse';
        this.reqParams.text = jQuery('#text').html();
        jQuery.post('app.php?action=' + this.reqParams.action, this.reqParams, this.updateText);
    },

    "wordShuffle" : function() {
        this.reqParams.action = 'wordShuffle';
        this.reqParams.text = jQuery('#text').html();
        jQuery.post('app.php?action=' + this.reqParams.action, this.reqParamse, this.updateText);
    },

    "copy" : function() {
        // Execute clipboard push
    },

    "updateText" : function(data) {
        jQuery('#text').html(data);
    }
};

// EOF
