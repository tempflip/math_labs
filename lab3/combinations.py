def get_orders(drinks = 3, people = 4):
	if (people == 1):
		orders = []
		for i in range(drinks):
			orders.append([i])
		return orders
	else :
		orders = []
		for order in get_orders(drinks, people-1):
			for i in range(drinks):
				this_order = order.copy()
				this_order.append(i)
				orders.append(this_order)

		return orders


print ('If order do matter number of possible orders (simple repetition):')
print (len(get_orders(5,100)))
print ('If order doesnt matter number of possible orders (combination with repetetion):')
print(len(set([tuple(sorted(o)) for o in get_orders(3,4)])))



		
