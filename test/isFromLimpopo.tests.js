describe('This isFromLimpopo function' , function(){
    it('should return false when tested using "GA 34 GP"' , function(){
        assert.equal(false,isFromLimpopo('GA 34 GP'));

    });
    it('should return true when tested using "GJK 246 L"' , function(){
        assert.equal(true,isFromLimpopo('GJK 246 L'));
        
    });

});