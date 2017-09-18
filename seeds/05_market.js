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
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.976627020014!2d-104.9610156846252!3d39.71770797945247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQzJzAzLjgiTiAxMDTCsDU3JzMxLjgiVw!5e0!3m2!1sen!2sus!4v1505766899080"
				},
				{
					id: 2,
					name: "Lowry Farmers' Market",
					address: "7581 East Academy Blvd., Denver, Colorado, 80230",
					description: "Baked goods; Crafts and/or woodworking items; Cut flowers; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Plants in containers; Prepared foods (for immediate consumption)",
					schedule: "06/04/2014 to 09/30/2014 Tue: 4:00 PM-8:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.9179385181883!2d-104.89914208462523!3d39.719026879452294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQzJzA4LjUiTiAxMDTCsDUzJzQ5LjAiVw!5e0!3m2!1sen!2sus!4v1505767415726"

				},
				{
					id: 3,
					name: "South Pearl Street Farmers' Market",
					address: "1500 S. Pearl Street, Denver, Colorado, 80210",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nursery stock, bedding plants; Nuts; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "May 20, 2012 to October 28, 2012 sun:9:00 AM - 1:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.2778664417874!2d-104.98265868462617!3d39.68845597945653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQxJzE4LjQiTiAxMDTCsDU4JzQ5LjciVw!5e0!3m2!1sen!2sus!4v1505767506544"
				},
				{
					id: 4,
					name: "Stapleton Fresh Market",
					address: "Denver, Colorado",
					description: "Baked goods; Fresh fruit and vegetables; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "06/21/2015 to 10/11/2015 Sun: 8:30 AM-12:30 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1810619929092!2d-104.90193168462397!3d39.758042979447225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ1JzI5LjAiTiAxMDTCsDUzJzU5LjEiVw!5e0!3m2!1sen!2sus!4v1505767571744"
				},
				{
					id: 5,
					name: "Denver Urban Homesteading Farmers Market",
					address: "200 Santa Fe Drive, Denver, Colorado, 80223",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "01/01/2014 to 12/31/2014 Tue: 9:00 AM-3:00 PM;Thu: 1:00 PM-7:00 PM;Fri: 1:00 AM-7:00 PM;Sat: 9:00 AM-3:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.894705627625!2d-105.00047568462513!3d39.71954897945226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQzJzEwLjQiTiAxMDTCsDU5JzUzLjgiVw!5e0!3m2!1sen!2sus!4v1505767626792"
				},
				{
					id: 6,
					name: "Lakewood Farmers Market",
					address: "9077 W Alameda Ave, Lakewood, Colorado, 80226",
					description: "Baked goods; Crafts and/or woodworking items; Eggs; Fresh fruit and vegetables; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Soap and/or body care products",
					schedule: "06/27/2015 to 09/26/2015 Sat: 10:00 AM-2:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.256008088293!2d-105.10168468462543!3d39.71142897945335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQyJzQxLjEiTiAxMDXCsDA1JzU4LjIiVw!5e0!3m2!1sen!2sus!4v1505767657083"
				},
				{
					id: 7,
					name: "7.6 Four Seasons Farmers and Artisans Market",
					address: "7043 W. 38th Ave., Wheat Ridge, Colorado, 80033",
					description: "Baked goods; Cheese and/or dairy products; Crafts and/or woodworking items; Cut flowers; Eggs; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "01/01/2016 to 12/31/2016 Tue: 12:00 PM-6:00 PM;Wed: 12:00 PM-6:00 PM;Thu: 12:00 PM-6:00 PM;Fri: 12:00 PM-6:00 PM;Sat: 9:00 AM-3:00 PM;Sun: 10:00 AM-2:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3066.652764882937!2d-105.07743578462365!3d39.76990397944555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzExLjciTiAxMDXCsDA0JzMwLjkiVw!5e0!3m2!1sen!2sus!4v1505767692302"
				},
				{
					id: 8,
					name: "The Victory Market on South University",
					address: "6400 S. University , Centennial , Colorado, 80121",
					description: "Baked goods; Cheese and/or dairy products; Crafts and/or woodworking items; Cut flowers; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products",
					schedule: "05/01/2015 to 10/30/2015 Fri: 10:00 AM-2:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.1258680339483!2d-104.96026568462865!3d39.60184697946818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDM2JzA2LjciTiAxMDTCsDU3JzI5LjEiVw!5e0!3m2!1sen!2sus!4v1505767727426"
				},
				{
					id: 9,
					name: "Belmar Fresh Market",
					address: "Wadsworth & Alameda, Lakewood, Colorado",
					description: "Baked goods; Cheese and/or dairy products; Crafts and/or woodworking items; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Maple syrup and/or maple products; Meat; Nuts; Plants in containers; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "06/07/2014 to 09/27/2014 Sat: 9:00 AM-1:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.2706146240125!2d-105.08354388462541!3d39.71110067945337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQyJzQwLjAiTiAxMDXCsDA0JzUyLjkiVw!5e0!3m2!1sen!2sus!4v1505767760547"
				},
				{
					id: 10,
					name: "Highland Farmers Market",
					address: "1500 Boulder Street, Denver, Colorado, 80211",
					description: "Baked goods; Cheese and/or dairy products; Cut flowers; Eggs; Fish and/or seafood; Fresh fruit and vegetables; Fresh and/or dried herbs; Honey; Canned or preserved fruits, vegetables, jams, jellies, preserves, salsas, pickles, dried fruit, etc.; Meat; Nursery stock, bedding plants; Nuts; Poultry; Prepared foods (for immediate consumption); Soap and/or body care products; Wine, beer, hard cider",
					schedule: "June 2, 2012 to October 13, 2012 Sat:9:00 AM - 1:00 PM;",
					google_map_link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.1589279088867!2d-105.01341868462397!3d39.758539979447015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ1JzMwLjciTiAxMDXCsDAwJzQwLjQiVw!5e0!3m2!1sen!2sus!4v1505767797564"
				}
			]);
		});
};
