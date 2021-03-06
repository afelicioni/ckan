/*globals describe it assert jQuery*/
describe('jQuery.url', function () {
  describe('.escape()', function () {
    it('should escape special characters', function () {
      var target = jQuery.url.escape('&<>=?#/');
      assert.equal(target, '%26%3C%3E%3D%3F%23%2F');
    });

    it('should convert spaces to + rather than %20', function () {
      var target = jQuery.url.escape(' ');
      assert.equal(target, '+');
    });
  });

  describe('.slugify()', function () {
    it('should replace spaces with hyphens', function () {
      var target = jQuery.url.slugify('apples and pears');
      assert.equal(target, 'apples-and-pears');
    });

    it('should lowecase all characters', function () {
      var target = jQuery.url.slugify('APPLES AND PEARS');
      assert.equal(target, 'apples-and-pears');
    });

    it('should convert unknown characters to hyphens', function () {
      var target = jQuery.url.slugify('apples & pears');
      assert.equal(target, 'apples-pears');
    });

    it('should nomalise hyphens', function () {
      var target = jQuery.url.slugify('apples---pears');
      assert.equal(target, 'apples-pears', 'remove duplicate hyphens');

      target = jQuery.url.slugify('--apples-pears');
      assert.equal(target, 'apples-pears', 'strip preceding hyphens');

      target = jQuery.url.slugify('apples-pears--');
      assert.equal(target, 'apples-pears', 'strip trailing hyphens');
    });

    it('should try and asciify unicode characters', function () {
      var target = jQuery.url.slugify('éåøç');
      assert.equal(target, 'eaoc');
    });
  });
});
