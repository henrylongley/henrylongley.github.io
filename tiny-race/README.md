#Tiny Race

open --> index.html(tiny-race)

        press A to add a racer   ...   press D to delete a racer


|Skill:|Choice:|   Location:   |    Test:    |     Expected result:
               (all sketch.js)
|Read    |r3| racer loop      | Run the race | Racers are read from the list|
|Update  |u3| racer movement  | Run the race | Each racer moves forwards    |
|Add     |a1| keyPressed      | Press A      | A new racer gets added       |
|Remove  |d1| keyPressed      | Press D      | The last racer is removed    |


.length is used in sketch.js in the racer loop, racer count, and empty list check.


Test:

1. Start the race
2. Press A three times
3. Press D six times
4. Press D again

Expected result: You can add and remove racers freely and removing a racer while there is already none does not break the game.

