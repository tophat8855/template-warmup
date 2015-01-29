describe('renderTemplate', function() {
  it ('replaces a single <<word>> with the key string', function() {
    var template = "Hello <<name>>";
    var rendered = renderTemplate(template, {name: 'john'});

    expect(rendered).toEqual("Hello john");
  });

  it ('replaces more words with key string', function() {
    var template = "Hello <<firstName>> <<lastName>>";
    var rendered = renderTemplate(template, {firstName: 'john', lastName: 'foley'});

    expect(rendered).toEqual("Hello john foley");
  });

  it ('replaces more words with key string', function() {
    var template = "That item costs $<<price>>";
    var rendered = renderTemplate(template, {price: '10.00'});

    expect(rendered).toEqual("That item costs $10.00");
  });
});
