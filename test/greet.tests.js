describe('This greet function' , function(){
    it('should return "Hello, Siya" when tested with Siya' , function(){
        assert.equal("Hello, Siya",greet('Siya'));

        
    });
    it('should return "Hello, Mhlengi" when tested with Mhlengi' , function(){
        assert.equal("Hello, Mhlengi",greet('Mhlengi'));

        
    });
    
});

