exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE market CASCADE; ALTER SEQUENCE market_id_seq restart with 6')
		.then(function () {
			return knex('market').insert([
				{
					id: 1,
					name: "Cherry Creek Fresh Market",
					address: "Denver, Colorado",
					description: "Baked goods; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "05/02/2015 to 06/13/2015 Sat: 8:00 AM-1:00 PM;<br>06/17/2015 to 10/03/2015 Wed: 9:00 AM-1:00 PM;Sat: 8:00 AM-1:00 PM;<br>10/10/2015 to 10/31/2015 Sat: 8:00 AM-1:00 PM;<br> ",
					google_map_link: "http://maps.google.com/?q=39.717708%2C%20-104.958827%20(%22Cherry+Creek+Fresh+Market%22)"
				},
				{
					id: 2,
					name: "Lowry Farmers' Market",
					address: "7581 East Academy Blvd., Denver, Colorado, 80230",
					description: "Baked goods; Crafts and/or woodworking items; Cut flowers; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Plants in containers; Prepared foods (for immediate consumption)",
					schedule: "06/04/2014 to 09/30/2014 Tue: 4:00 PM-8:00 PM;<br> <br> <br> ",
					google_map_link: "http://maps.google.com/?q=39.7190269%2C%20-104.8969534%20(%22Lowry+Farmers'+Market%22)"
				},
				{
					id: 3,
					name: "South Pearl Street Farmers' Market",
					address: "1500 S. Pearl Street, Denver, Colorado, 80210",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nursery stock, bedding plants; Nuts; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "May 20, 2012 to October 28, 2012 sun:9:00 AM - 1:00 PM;<br> <br> <br> ",
					google_map_link: "http://maps.google.com/?q=39.688456%2C%20-104.980470%20(%22South+Pearl+Street+Farmers'+Market%22)"
				},
				{
					id: 4,
					name: "Stapleton Fresh Market",
					address: "Denver, Colorado",
					description: "Baked goods; Fresh fruit and vegetables; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "06/21/2015 to 10/11/2015 Sun: 8:30 AM-12:30 PM;<br> <br> <br> ",
					google_map_link: "http://maps.google.com/?q=39.758043%2C%20-104.899743%20(%22Stapleton+Fresh+Market%22)"
				},
				{
					id: 5,
					name: "Denver Urban Homesteading Farmers Market",
					address: "200 Santa Fe Drive, Denver, Colorado, 80223",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "01/01/2014 to 12/31/2014 Tue: 9:00 AM-3:00 PM;Thu: 1:00 PM-7:00 PM;Fri: 1:00 AM-7:00 PM;Sat: 9:00 AM-3:00 PM;<br> <br> <br> ",
					google_map_link: "http://maps.google.com/?q=39.719549%2C%20-104.998287%20(%22Denver+Urban+Homesteading+Farmers+Market%22)"
				}
			]);
		});
};
