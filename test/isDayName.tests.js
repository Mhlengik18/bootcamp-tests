describe('This isDayName' , function(){
    it('should return true when tested using "Monday"' , function(){
        assert.equal(true,isDayName('Monday'));

    });
    it('should return true when tested using "Sunday"' , function(){
        assert.equal(true,isDayName('Sunday'));

    });
    it('should return false when tested using "tomorrow"' , function(){
        assert.equal(false,isDayName('tomorrow'));

    });

});