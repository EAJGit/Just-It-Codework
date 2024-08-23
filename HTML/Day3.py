#TUPLE  used for data types that will not change
fruits = ('Apple', 'Orange', 'Banana')
print(fruits)
print(fruits[1])
print(fruits[2])
print('Number of items in our tuple:', len(fruits))

for fruit in fruits:
 print(fruit)
#useful for data you just want to read

# SETS an unordered collection of unique elements

week = {'Monday','Tuesday','Wednesday','Thursday','Friday', 'Saturday','Sunday'}
print(week)
# If we add a dupliace element to our set, the set will ignore the element, because it only cares about unique elements

#
weekend = {'Saturday', 'Sunday'}
#Intersection- what is in common
print(week.intersection(weekend))
print(week & weekend)
#difference -what elements do not appear in both
print(week.difference(weekend))
print(week - weekend)
#UNION merges 2 sets together
new_set = week.union(weekend)
print(new_set)
new_set = week | weekend
print(new_set)