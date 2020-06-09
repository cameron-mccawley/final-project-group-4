(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['statBlock'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<div id=\"stat-block-wrapper\">\r\n            <div id=\"stat-block\" class=\"stat-block\">\r\n                <hr class=\"orange-border\" />\r\n                    <div class=\"section-left\">\r\n                        <div class=\"creature-heading\">\r\n                            <h1 id=\"monster-name\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data,"loc":{"start":{"line":6,"column":50},"end":{"line":6,"column":58}}}) : helper)))
    + "</h1>\r\n                            <h2 id=\"monster-type\"><i>"
    + alias4(((helper = (helper = lookupProperty(helpers,"typeString") || (depth0 != null ? lookupProperty(depth0,"typeString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"typeString","hash":{},"data":data,"loc":{"start":{"line":7,"column":53},"end":{"line":7,"column":67}}}) : helper)))
    + "</i></h2>\r\n                        </div> <!-- creature heading -->\r\n                        <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\r\n                            <polyline points=\"0,0 400,2.5 0,5\"></polyline>\r\n                        </svg>\r\n                        <div class=\"top-stats\">\r\n                            <div class=\"property-line first\">\r\n                                <h4>Armor Class</h4>\r\n                                <p id=\"armor-class\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"acText") || (depth0 != null ? lookupProperty(depth0,"acText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"acText","hash":{},"data":data,"loc":{"start":{"line":15,"column":52},"end":{"line":15,"column":62}}}) : helper)))
    + "</p>\r\n                            </div> <!-- property line -->\r\n                            <div class=\"property-line\">\r\n                                <h4>Hit Points</h4>\r\n                                <p id=\"hit-points\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"hpText") || (depth0 != null ? lookupProperty(depth0,"hpText") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"hpText","hash":{},"data":data,"loc":{"start":{"line":19,"column":51},"end":{"line":19,"column":61}}}) : helper)))
    + "</p>\r\n                            </div> <!-- property line -->\r\n                            <div class=\"property-line last\">\r\n                                <h4>Speed</h4>\r\n                                <p id=\"speed\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"speedString") || (depth0 != null ? lookupProperty(depth0,"speedString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"speedString","hash":{},"data":data,"loc":{"start":{"line":23,"column":46},"end":{"line":23,"column":61}}}) : helper)))
    + "</p>\r\n                            </div> <!-- property line -->\r\n                            <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\r\n                                <polyline points=\"0,0 400,2.5 0,5\"></polyline>\r\n                            </svg>\r\n                            <div class=\"scores\">\r\n                                <div class=\"scores-strength\">\r\n                                    <h4>STR</h4>\r\n                                    <p id=\"strpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"strPointsS") || (depth0 != null ? lookupProperty(depth0,"strPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"strPointsS","hash":{},"data":data,"loc":{"start":{"line":31,"column":51},"end":{"line":31,"column":65}}}) : helper)))
    + "</p>\r\n                                </div> <!-- scores strength -->\r\n                                <div class=\"scores-dexterity\">\r\n                                    <h4>DEX</h4>\r\n                                    <p id=\"dexpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"dexPointsS") || (depth0 != null ? lookupProperty(depth0,"dexPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"dexPointsS","hash":{},"data":data,"loc":{"start":{"line":35,"column":51},"end":{"line":35,"column":65}}}) : helper)))
    + "</p>\r\n                                </div> <!-- scores dexterity -->\r\n                                <div class=\"scores-constitution\">\r\n                                    <h4>CON</h4>\r\n                                    <p id=\"conpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"conPointsS") || (depth0 != null ? lookupProperty(depth0,"conPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"conPointsS","hash":{},"data":data,"loc":{"start":{"line":39,"column":51},"end":{"line":39,"column":65}}}) : helper)))
    + "</p>\r\n                                </div> <!-- scores constitution -->\r\n                                <div class=\"scores-intelligence\">\r\n                                    <h4>INT</h4>\r\n                                    <p id=\"intpts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"intPointsS") || (depth0 != null ? lookupProperty(depth0,"intPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"intPointsS","hash":{},"data":data,"loc":{"start":{"line":43,"column":51},"end":{"line":43,"column":65}}}) : helper)))
    + "</p>\r\n                                </div> <!-- scores intelligence -->\r\n                                <div class=\"scores-wisdom\">\r\n                                    <h4>WIS</h4>\r\n                                    <p id=\"wispts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"wisPointsS") || (depth0 != null ? lookupProperty(depth0,"wisPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"wisPointsS","hash":{},"data":data,"loc":{"start":{"line":47,"column":51},"end":{"line":47,"column":65}}}) : helper)))
    + "</p>\r\n                                </div> <!-- scores wisdom -->\r\n                                <div class=\"scores-charisma\">\r\n                                    <h4>CHA</h4>\r\n                                    <p id=\"chapts\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"chaPointsS") || (depth0 != null ? lookupProperty(depth0,"chaPointsS") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"chaPointsS","hash":{},"data":data,"loc":{"start":{"line":51,"column":51},"end":{"line":51,"column":65}}}) : helper)))
    + "</p>\r\n                                </div> <!-- scores charisma -->\r\n                            </div> <!-- scores -->\r\n                            <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\r\n                                <polyline points=\"0,0 400,2.5 0,5\"></polyline>\r\n                            </svg>\r\n                            <div id=\"properties-list\">\r\n                                <div class=\"property-line first\">\r\n                                    <div>\r\n                                        <h4>Skills</h4>\r\n                                        <p id=\"skills\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"skillsString") || (depth0 != null ? lookupProperty(depth0,"skillsString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"skillsString","hash":{},"data":data,"loc":{"start":{"line":61,"column":55},"end":{"line":61,"column":71}}}) : helper)))
    + "</p> <!--Skills would go here-->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"property-line\">\r\n                                    <div>\r\n                                        <h4>Senses</h4>\r\n                                        <p id=\"senses\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"sensesString") || (depth0 != null ? lookupProperty(depth0,"sensesString") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"sensesString","hash":{},"data":data,"loc":{"start":{"line":67,"column":55},"end":{"line":67,"column":71}}}) : helper)))
    + "</p> <!--Senses would go here-->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"property-line\">\r\n                                    <div>\r\n                                        <h4 id=\"languages\">Languages</h4>\r\n                                        <p>—</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"property-line last\">\r\n                                    <h4>Challenge</h4>\r\n                                    <p id=\"challenge-rating\">"
    + alias4(((helper = (helper = lookupProperty(helpers,"cr") || (depth0 != null ? lookupProperty(depth0,"cr") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cr","hash":{},"data":data,"loc":{"start":{"line":78,"column":61},"end":{"line":78,"column":67}}}) : helper)))
    + "</p>\r\n                                </div>\r\n                            </div>\r\n                            <svg height=\"5\" width=\"100%\" class=\"tapered-rule\">\r\n                                <polyline points=\"0,0 400,2.5 0,5\"></polyline>\r\n                            </svg>\r\n                        </div>\r\n                    </div>\r\n                    <hr class=\"orange-border bottom\" />\r\n                </div>\r\n            </div>\r\n        </div>";
},"useData":true});
})();