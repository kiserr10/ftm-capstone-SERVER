exports.seed = function(knex, Promise) {
	return knex.raw('TRUNCATE market CASCADE; ALTER SEQUENCE market_id_seq restart with 11')
		.then(function () {
			return knex('market').insert([
				{
					id: 1,
					name: "Cherry Creek Fresh Market",
					address: "Denver, Colorado",
					description: "Baked goods; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "05/02/2015 to 06/13/2015 Sat: 8:00 AM-1:00 PM; 06/17/2015 to 10/03/2015 Wed: 9:00 AM-1:00 PM;Sat: 8:00 AM-1:00 PM;  10/10/2015 to 10/31/2015 Sat: 8:00 AM-1:00 PM; ",
					google_map_link: "http://maps.google.com/?q=39.717708%2C%20-104.958827%20(%22Cherry+Creek+Fresh+Market%22)"
				},
				{
					id: 2,
					name: "Lowry Farmers' Market",
					address: "7581 East Academy Blvd., Denver, Colorado, 80230",
					description: "Baked goods; Crafts and/or woodworking items; Cut flowers; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Plants in containers; Prepared foods (for immediate consumption)",
					schedule: "06/04/2014 to 09/30/2014 Tue: 4:00 PM-8:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.7190269%2C%20-104.8969534%20(%22Lowry+Farmers'+Market%22)"
				},
				{
					id: 3,
					name: "South Pearl Street Farmers' Market",
					address: "1500 S. Pearl Street, Denver, Colorado, 80210",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nursery stock, bedding plants; Nuts; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "May 20, 2012 to October 28, 2012 sun:9:00 AM - 1:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.688456%2C%20-104.980470%20(%22South+Pearl+Street+Farmers'+Market%22)"
				},
				{
					id: 4,
					name: "Stapleton Fresh Market",
					address: "Denver, Colorado",
					description: "Baked goods; Fresh fruit and vegetables; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "06/21/2015 to 10/11/2015 Sun: 8:30 AM-12:30 PM;",
					google_map_link: "http://maps.google.com/?q=39.758043%2C%20-104.899743%20(%22Stapleton+Fresh+Market%22)"
				},
				{
					id: 5,
					name: "Denver Urban Homesteading Farmers Market",
					address: "200 Santa Fe Drive, Denver, Colorado, 80223",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "01/01/2014 to 12/31/2014 Tue: 9:00 AM-3:00 PM;Thu: 1:00 PM-7:00 PM;Fri: 1:00 AM-7:00 PM;Sat: 9:00 AM-3:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.719549%2C%20-104.998287%20(%22Denver+Urban+Homesteading+Farmers+Market%22)"
				},
				{
					id: 6,
					name: "Lakewood Farmers Market",
					address: "9077 W Alameda Ave, Lakewood, Colorado, 80226",
					description: "Baked goods; Crafts and/or woodworking items; Eggs; Fresh fruit and vegetables; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Soap and/or body care products",
					schedule: "06/27/2015 to 09/26/2015 Sat: 10:00 AM-2:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.711429%2C%20-105.099496%20(%22Lakewood+Farmers+Market%22)"
				},
				{
					id: 7,
					name: "7.6 Four Seasons Farmers and Artisans Market",
					address: "7043 W. 38th Ave., Wheat Ridge, Colorado, 80033",
					description: "Baked goods; Cheese and/or dairy products; Crafts and/or woodworking items; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "01/01/2016 to 12/31/2016 Tue: 12:00 PM-6:00 PM;Wed: 12:00 PM-6:00 PM;Thu: 12:00 PM-6:00 PM;Fri: 12:00 PM-6:00 PM;Sat: 9:00 AM-3:00 PM;Sun: 10:00 AM-2:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.7699040%2C%20-105.0752471%20(%22Four+Seasons+Farmers+and+Artisans+Market%22)"
				},
				{
					id: 8,
					name: "The Victory Market on South University",
					address: "6400 S. University , Centennial , Colorado, 80121",
					description: "Baked goods; Cheese and/or dairy products; Crafts and/or woodworking items; Cut flowers; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "05/01/2015 to 10/30/2015 Fri: 10:00 AM-2:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.6018470%2C%20-104.9580770%20(%22The+Victory+Market+on+South+University+%22)"
				},
				{
					id: 9,
					name: "Belmar Fresh Market",
					address: "Wadsworth & Alameda, Lakewood, Colorado",
					description: "Baked goods; Cheese and/or dairy products; Crafts and/or woodworking items; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "06/07/2014 to 09/27/2014 Sat: 9:00 AM-1:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.7111007%2C%20-105.0813552%20(%22Belmar+Fresh+Market%22)"
				},
				{
					id: 10,
					name: "Highland Farmers Market",
					address: "1500 Boulder Street, Denver, Colorado, 80211",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nursery stock, bedding plants; Nuts; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "June 2, 2012 to October 13, 2012 Sat:9:00 AM - 1:00 PM;",
					google_map_link: "http://maps.google.com/?q=39.758540%2C%20-105.011230%20(%22Highland+Farmers+Market%22)"
				}
			]);
		});
};
