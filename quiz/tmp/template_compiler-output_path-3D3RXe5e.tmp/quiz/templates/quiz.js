export default Ember.HTMLBars.template((function() {
  return {
    meta: {
      "revision": "Ember@1.13.11",
      "loc": {
        "source": null,
        "start": {
          "line": 1,
          "column": 0
        },
        "end": {
          "line": 5,
          "column": 0
        }
      },
      "moduleName": "quiz/templates/quiz.hbs"
    },
    arity: 0,
    cachedFragment: null,
    hasRendered: false,
    buildFragment: function buildFragment(dom) {
      var el0 = dom.createDocumentFragment();
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      var el1 = dom.createComment("");
      dom.appendChild(el0, el1);
      var el1 = dom.createTextNode("\n");
      dom.appendChild(el0, el1);
      return el0;
    },
    buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
      var morphs = new Array(4);
      morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
      morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
      morphs[2] = dom.createMorphAt(fragment,4,4,contextualElement);
      morphs[3] = dom.createMorphAt(fragment,6,6,contextualElement);
      dom.insertBoundary(fragment, 0);
      return morphs;
    },
    statements: [
      ["content","model._data.question",["loc",[null,[1,0],[1,24]]]],
      ["inline","input",[],["type","button","value",["subexpr","@mut",[["get","model._data.optionA",["loc",[null,[2,28],[2,47]]]]],[],[]]],["loc",[null,[2,0],[2,49]]]],
      ["inline","input",[],["type","button","value",["subexpr","@mut",[["get","model._data.optionB",["loc",[null,[3,28],[3,47]]]]],[],[]]],["loc",[null,[3,0],[3,49]]]],
      ["content","outlet",["loc",[null,[4,0],[4,10]]]]
    ],
    locals: [],
    templates: []
  };
}()));