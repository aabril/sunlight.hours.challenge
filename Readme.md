# Badi’s sunlight hours

A new feature has been requested for our room listings in future Barcelona: 
we want to display the sunlight hours that a given apartment receives in a day.

To ensure our announced sunlight hours will be always true, 
we decided to display the sunlight hours during the Winter Solstice. 

Hence you can do all your calculations assuming December 22nd sunlight hours, 
ie sunlight hours will be between 08:14 and 17:25.

In this amazing version of future Barcelona, one can safely assume:

1. Buildings are distributed in neighbourhoods,
2. In those neighbourhoods, the buildings are always aligned east to west,
3. The sun rises in the east and travels at a constant radial speed until setting,
4. The only shadows created in a neighbourhood are artefacts of the buildings in it,
5. We consider an apartment receives sunlight when:
> either its eastern or western exterior wall is fully covered 
> in sunlight and/or when the sun is directly overhead,
6. There is only one apartment per floor; in a building with N floors they are numbered from 0 to N-1

![](/doc/figure0.png)


## API

> Your program should have two APIs defined:

- - 

1. _init​_ method that takes:
a String containing a JSON describing the city, 
with this format:
```
[
  { 
    neighborhood: <name_string>, 
    apartments_height: <number>, 
    buildings: [
      {
        name: <name_string>,
        apartments_count: <number>, 
        distance: <number>
      }
    ]
  }
]
```
Assume the building list is ordered from east to west.

- - 

2. **getSunlightHours​** method which takes:
a neighbourhood name, building name, and apartment number. 

It returns the sunlight hours as a string like:
“hh:mm:ss - hh:mm:ss” in 24hr format.

- - 

Assume **i​nit​** is only going to be called once,
however, **g​etSunlightHours​** will be called very frequently.

Please provide a working solution, and justify any limitations. 
Don’t be afraid to go above and beyond!
