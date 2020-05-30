(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['statBlock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"stat-block-wrapper\">\n            <div id=\"stat-block\" class=\"stat-block\">\n                <hr class=\"orange-border\" />\n                    <div class=\"section-left\">\n                        <div class=\"creature-heading\">\n                            <h1 id=\"monster-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":58}}}) : helper)))
    + "</h1>\n                            <h2 id=\"monster-type\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"typeString") || (depth0 != null ? lookupProperty(depth0,"typeString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeString","hash":{},"data":data,"loc":{"start":{"line":7,"column":53},"end":{"line":7,"column":67}}}) : helper)))
    + "</i></h2>\n                        </div> <!-- creature heading -->\n                        <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\n                            <polyline points=\"0,0 400,2.5 0,5\"></polyline>\n                        </svg>\n                        <div class=\"top-stats\">\n                            <div class=\"property-line first\">\n                                <h4>Armor Class</h4>\n                                <p id=\"armor-class\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"acText") || (depth0 != null ? lookupProperty(depth0,"acText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"acText","hash":{},"data":data,"loc":{"start":{"line":15,"column":52},"end":{"line":15,"column":62}}}) : helper)))
    + "</p>\n                            </div> <!-- property line -->\n                            <div class=\"property-line\">\n                                <h4>Hit Points</h4>\n                                <p id=\"hit-points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hpText") || (depth0 != null ? lookupProperty(depth0,"hpText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hpText","hash":{},"data":data,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":61}}}) : helper)))
    + "</p>\n                            </div> <!-- property line -->\n                            <div class=\"property-line last\">\n                                <h4>Speed</h4>\n                                <p id=\"speed\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"speedString") || (depth0 != null ? lookupProperty(depth0,"speedString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speedString","hash":{},"data":data,"loc":{"start":{"line":23,"column":46},"end":{"line":23,"column":61}}}) : helper)))
    + "</p>\n                            </div> <!-- property line -->\n                            <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\n                                <polyline points=\"0,0 400,2.5 0,5\"></polyline>\n                            </svg>\n                            <div class=\"scores\">\n                                <div class=\"scores-strength\">\n                                    <h4>STR</h4>\n                                    <p id=\"strpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"strPointsS") || (depth0 != null ? lookupProperty(depth0,"strPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strPointsS","hash":{},"data":data,"loc":{"start":{"line":31,"column":51},"end":{"line":31,"column":65}}}) : helper)))
    + "</p>\n                                </div> <!-- scores strength -->\n                                <div class=\"scores-dexterity\">\n                                    <h4>DEX</h4>\n                                    <p id=\"dexpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dexPointsS") || (depth0 != null ? lookupProperty(depth0,"dexPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dexPointsS","hash":{},"data":data,"loc":{"start":{"line":35,"column":51},"end":{"line":35,"column":65}}}) : helper)))
    + "</p>\n                                </div> <!-- scores dexterity -->\n                                <div class=\"scores-constitution\">\n                                    <h4>CON</h4>\n                                    <p id=\"conpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"conPointsS") || (depth0 != null ? lookupProperty(depth0,"conPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"conPointsS","hash":{},"data":data,"loc":{"start":{"line":39,"column":51},"end":{"line":39,"column":65}}}) : helper)))
    + "</p>\n                                </div> <!-- scores constitution -->\n                                <div class=\"scores-intelligence\">\n                                    <h4>INT</h4>\n                                    <p id=\"intpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"intPointsS") || (depth0 != null ? lookupProperty(depth0,"intPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intPointsS","hash":{},"data":data,"loc":{"start":{"line":43,"column":51},"end":{"line":43,"column":65}}}) : helper)))
    + "</p>\n                                </div> <!-- scores intelligence -->\n                                <div class=\"scores-wisdom\">\n                                    <h4>WIS</h4>\n                                    <p id=\"wispts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"wisPointsS") || (depth0 != null ? lookupProperty(depth0,"wisPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wisPointsS","hash":{},"data":data,"loc":{"start":{"line":47,"column":51},"end":{"line":47,"column":65}}}) : helper)))
    + "</p>\n                                </div> <!-- scores wisdom -->\n                                <div class=\"scores-charisma\">\n                                    <h4>CHA</h4>\n                                    <p id=\"chapts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"chaPointsS") || (depth0 != null ? lookupProperty(depth0,"chaPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chaPointsS","hash":{},"data":data,"loc":{"start":{"line":51,"column":51},"end":{"line":51,"column":65}}}) : helper)))
    + "</p>\n                                </div> <!-- scores charisma -->\n                            </div> <!-- scores -->\n                            <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\n                                <polyline points=\"0,0 400,2.5 0,5\"></polyline>\n                            </svg>\n                            <div id=\"properties-list\">\n                                <div class=\"property-line first\">\n                                    <div>\n                                        <h4>Senses</h4>\n                                        <p id=\"senses\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sensesString") || (depth0 != null ? lookupProperty(depth0,"sensesString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensesString","hash":{},"data":data,"loc":{"start":{"line":61,"column":55},"end":{"line":61,"column":71}}}) : helper)))
    + "</p> <!--Senses would go here-->\n                                    </div>\n                                </div>\n                                <div class=\"property-line\">\n                                    <div>\n                                        <h4 id=\"languages\">Languages</h4>\n                                        <p>—</p>\n                                    </div>\n                                </div>\n                                <div class=\"property-line last\">\n                                    <h4>Challenge</h4>\n                                    <p id=\"challenge-rating\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cr") || (depth0 != null ? lookupProperty(depth0,"cr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cr","hash":{},"data":data,"loc":{"start":{"line":72,"column":61},"end":{"line":72,"column":67}}}) : helper)))
    + "</p>\n                                </div>\n                            </div>\n                            <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\n                                <polyline points=\"0,0 400,2.5 0,5\"></polyline>\n                            </svg>\n                        </div>\n                    </div>\n                    <hr class=\"orange-border bottom\" />\n                </div>\n            </div>\n        </div>";
},"useData":true});
})();