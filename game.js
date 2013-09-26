//This is the compainion to game.html, and will be used in the backend to calculate overall scores.

var clearText = function () {

    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
};

var calculate = function () {

    var f_table = document.GetElementById("farms");
    var f_pairs = [];

    //Only want the rows that actually contain the data, not label rows.
    for (var f_row in [f_table.rows[1], f_table.rows[2], f_table.rows[3]]){
        x = f_row[1];
        y = f_row[2];
        f_pairs.push([x, y]);
    }

    var r_table = document.GetElementById("ranching");
    var r_pairs = [];

    for (var r_row in [r_table.row[1], r_table.row[2], r_table.row[3]]){
        x = r_row[1];
        y = r_row[2];
        r_pairs.push([x, y]);
    }
    
    var sa_table = document.GetElementById("setasides");
    var sa_pairs = [];

    for (var sa_row in [sa_table.row[1], sa_table.row[2], sa_table.row[3], 
                    sa_table.row[4], sa_table.row[5]]){
        x = sa_row[1];
        y = sa_row[2];
        sa_pairs.push([x, y]);
    }

    var concat_pairs = function(p_array){
    
        //Using an arbitrary array for length, since we know they're all the same size
        var board_size = pts_crop_ag.length;
        //Making a temp new array, since we don't want to iterate over these
        //as well when we're adding squares around.
        var new_pairs = [];

        for (var pair in p_array){
            var x = pair[0], y = pair[1]; 
            var extra_coords = [[x+1, y], [x, y+1], [x+1, y+1]];

            for (var new_pair in extra_coords){
                
                //Want to check two things:
                //1. That the new coordinate pair doesn't already exist within the
                //pairs to be calculated.
                //2. That the new coordinates are not out of bounds. At worst, current
                //pair x or y would be at board_size -1. So since we're only doing 1 sq.
                //each way, need only check if x or y now == board size. 
                if ((p_array.indexOf(new_pair) !== -1) && 
                            (!(x+1 === board_size) || !(y+1 === board_size))){
                    
                    new_pairs.push(new_pair);
                }
            }
        }
        
        var all_pairs = p_array.concat(new_pairs);
        
        return all_pairs;
    };

    //Reassign farming and ranching to their updated sets of coords. 
    f_pairs = concat_pairs(f_pairs);
    r_pairs = concat_pairs(r_pairs);

    //For every set aside, want to remove only that square from the sets that are being used.
    for (var pair in sa_pairs){

        //No method that removes by reference, need to get index and pull from that.
        //get index of that item first, only remove if exists.
        var f_index = f_pairs.indexOf(pair);
        var r_index = r_pairs.indexOf(pair);

        //Ignoring splice's return of all removed items.
        if (f_index !== -1){

            f_pairs.splice(f_index, 1);
        }
        if (r_index !== -1){

            r_pairs.splice(r_index, 1);     
        }
    }

};

// the following is generated by tif_to_js.py and converts the gis file pts_agcarb.tif to javascript
var pts_agcarb = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 175, 175, 175, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 125, 125, 125, 75, 75, 75, 75, 125, 75, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 125, 125, 125, 75, 75, 75, 75, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 125, 25, 125, 75, 125, 75, 125, 75, 75, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 125, 75, 75, 75, 125, 75, 75, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 125, 125, 125, 75, 75, 75, 25, 75, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 125, 75, 75, 75, 75, 75, 75, 75, 175, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 125, 175, 75, 75, 75, 75, 0, 0]],[[0, 0, 0, 0, 0, 75, 75, 75, 0, 25, 75, 75, 75, 125, 75, 75, 75, 75, 75, 75, 25, 125, 125, 125, 75, 75, 75, 25]],[[0, 0, 0, 0, 0, 75, 75, 75, 75, 25, 25, 25, 75, 75, 75, 75, 75, 125, 75, 75, 75, 125, 175, 75, 125, 25, 25, 25]],[[0, 0, 0, 0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 125, 125, 75, 75, 75, 75, 75, 75, 125, 125, 25, 25, 125, 125]],[[0, 0, 0, 0, 0, 125, 125, 125, 125, 75, 75, 125, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 25, 25, 25, 25]],[[0, 0, 0, 0, 0, 125, 125, 125, 125, 75, 75, 75, 75, 75, 75, 75, 125, 75, 75, 75, 75, 75, 75, 75, 75, 75, 0, 0]],[[0, 0, 0, 0, 125, 125, 125, 125, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 0, 0, 0]],[[0, 0, 0, 0, 225, 225, 175, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 175, 75, 75, 75, 75, 75, 75, 75, 0, 0, 0]],[[0, 125, 125, 175, 175, 175, 125, 75, 75, 75, 75, 125, 125, 75, 75, 75, 75, 175, 125, 25, 25, 25, 75, 75, 75, 0, 0, 0]],[[0, 125, 125, 75, 125, 125, 125, 75, 75, 75, 75, 75, 75, 75, 25, 25, 75, 125, 175, 75, 125, 75, 75, 125, 0, 0, 0, 0]],[[75, 75, 75, 75, 125, 125, 125, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 75, 175, 125, 125, 25, 125, 175, 175, 0, 0, 0]],[[75, 75, 125, 75, 125, 75, 75, 125, 0, 0, 75, 75, 75, 75, 75, 125, 75, 75, 125, 175, 175, 175, 175, 175, 175, 0, 0, 0]],[[75, 75, 75, 75, 75, 75, 75, 0, 0, 0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 175, 175, 225, 225, 225, 0, 0, 0, 0]],[[0, 75, 75, 75, 75, 75, 0, 0, 0, 0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 175, 175, 175, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 125, 75, 75, 25, 25, 75, 75, 125, 125, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 25, 75, 25, 25, 25, 125, 75, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 25, 75, 75, 75, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 75, 75, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 125, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_agrec.tif to javascript
var pts_agrec = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 175, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 175, 175, 175, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 75, 25, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 175, 175, 25, 25, 25, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 25, 75, 25, 25, 175, 175, 25, 25, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 75, 25, 125, 175, 125, 125, 25, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 75, 75, 75, 125, 175, 125, 125, 125, 25, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 125, 175, 175, 175, 125, 25, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 75, 25, 25, 25, 125, 125, 175, 175, 125, 25, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 125, 125, 125, 125, 125, 25, 25, 25, 0, 0]],[[0, 0, 0, 0, 0, 25, 25, 25, 0, 25, 25, 25, 25, 75, 25, 25, 25, 25, 25, 175, 175, 125, 75, 75, 25, 25, 25, 25]],[[0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 75, 25, 175, 175, 175, 175, 25, 75, 25, 25, 25]],[[0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 75, 75, 25, 25, 25, 175, 175, 25, 25, 75, 25, 25, 75, 75]],[[0, 0, 0, 0, 0, 25, 75, 25, 25, 25, 25, 75, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]],[[0, 0, 0, 0, 0, 75, 75, 75, 25, 25, 25, 25, 25, 25, 25, 25, 75, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0]],[[0, 0, 0, 0, 75, 75, 75, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0]],[[0, 0, 0, 0, 225, 225, 125, 25, 25, 225, 125, 125, 25, 25, 25, 25, 25, 125, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0]],[[0, 75, 75, 125, 125, 125, 25, 25, 75, 75, 175, 225, 75, 25, 25, 25, 25, 125, 75, 25, 25, 25, 25, 25, 25, 0, 0, 0]],[[0, 75, 75, 25, 25, 25, 25, 75, 225, 175, 225, 125, 125, 175, 25, 25, 25, 75, 125, 25, 75, 25, 25, 75, 0, 0, 0, 0]],[[25, 25, 25, 25, 25, 25, 25, 225, 175, 75, 225, 75, 75, 175, 75, 25, 25, 25, 125, 75, 75, 25, 25, 175, 175, 0, 0, 0]],[[25, 25, 25, 25, 25, 25, 125, 175, 0, 0, 225, 225, 175, 225, 125, 75, 25, 25, 25, 175, 125, 125, 175, 175, 175, 0, 0, 0]],[[25, 25, 25, 25, 25, 225, 175, 0, 0, 0, 175, 175, 175, 175, 175, 25, 25, 25, 25, 125, 175, 225, 225, 225, 0, 0, 0, 0]],[[0, 25, 25, 25, 25, 25, 0, 0, 0, 0, 75, 75, 75, 125, 25, 25, 25, 25, 25, 125, 125, 125, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 125, 25, 25, 25, 25, 25, 25, 75, 75, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 75, 25, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_crop_ag.tif to javascript
var pts_crop_ag = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 150, 150, 150, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 225, 375, 225, 150, 225, 225, 225, 150, 225, 225, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 225, 375, 225, 150, 375, 300, 150, 75, 225, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 150, 300, 225, 225, 375, 375, 150, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 75, 75, 225, 150, 75, 150, 150, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 150, 150, 150, 225, 225, 75, 150, 150, 150, 150, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 375, 375, 375, 300, 300, 300, 75, 75, 225, 375, 225, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 375, 375, 150, 225, 300, 225, 75, 75, 225, 300, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 375, 375, 300, 150, 375, 225, 150, 75, 75, 300, 225, 150, 375, 375, 0, 0]],[[0, 0, 0, 0, 0, 375, 375, 225, 0, 375, 375, 375, 375, 375, 300, 375, 300, 150, 300, 300, 75, 150, 150, 225, 375, 375, 300, 75]],[[0, 0, 0, 0, 0, 375, 375, 225, 225, 375, 375, 375, 225, 300, 300, 150, 225, 300, 300, 300, 225, 75, 150, 225, 150, 150, 75, 75]],[[0, 0, 0, 0, 150, 150, 150, 75, 150, 375, 300, 150, 225, 375, 375, 75, 75, 300, 225, 300, 375, 225, 75, 150, 150, 75, 75, 75]],[[0, 0, 0, 0, 0, 75, 300, 75, 75, 375, 375, 375, 375, 375, 375, 150, 75, 375, 150, 75, 375, 300, 150, 150, 150, 225, 75, 75]],[[0, 0, 0, 0, 0, 75, 75, 75, 75, 300, 300, 150, 150, 375, 375, 225, 150, 300, 300, 300, 300, 150, 300, 300, 225, 150, 0, 0]],[[0, 0, 0, 0, 75, 75, 75, 75, 75, 300, 150, 300, 225, 150, 375, 375, 300, 375, 375, 300, 375, 375, 300, 300, 225, 0, 0, 0]],[[0, 0, 0, 0, 375, 375, 75, 75, 150, 150, 300, 300, 375, 150, 375, 225, 225, 75, 300, 225, 150, 300, 300, 225, 225, 0, 0, 0]],[[0, 225, 225, 75, 75, 75, 75, 75, 150, 150, 375, 375, 300, 225, 300, 375, 225, 75, 150, 300, 225, 300, 225, 225, 150, 0, 0, 0]],[[0, 225, 225, 75, 75, 75, 75, 150, 300, 375, 375, 375, 300, 375, 225, 375, 300, 150, 75, 225, 375, 375, 300, 75, 0, 0, 0, 0]],[[300, 300, 300, 75, 75, 75, 75, 300, 300, 300, 375, 300, 300, 375, 300, 300, 225, 225, 75, 75, 150, 225, 150, 75, 75, 0, 0, 0]],[[225, 225, 225, 75, 75, 75, 75, 225, 0, 0, 375, 375, 375, 375, 300, 300, 375, 150, 225, 75, 75, 75, 75, 75, 75, 0, 0, 0]],[[375, 375, 300, 150, 75, 300, 225, 0, 0, 0, 375, 375, 300, 375, 375, 300, 225, 150, 375, 75, 75, 75, 75, 75, 0, 0, 0, 0]],[[0, 375, 375, 225, 150, 225, 0, 0, 0, 0, 300, 300, 300, 225, 375, 375, 150, 150, 225, 75, 75, 375, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 375, 150, 300, 225, 150, 225, 225, 75, 150, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 300, 75, 75, 225, 150, 150, 225, 375, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 150, 150, 225, 300, 375, 300, 300, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 375, 225, 300, 300, 375, 225, 225, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 300, 225, 300, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 375, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_pscarb.tif to javascript
var pts_pscarb = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 150, 150, 150, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 100, 100, 50, 50, 50, 50, 100, 50, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 100, 100, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 100, 50, 100, 50, 100, 50, 50, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 50, 50, 50, 100, 50, 50, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 100, 100, 50, 50, 50, 0, 50, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 100, 50, 50, 50, 50, 50, 50, 50, 150, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100, 150, 50, 50, 50, 50, 0, 0]],[[0, 0, 0, 0, 0, 50, 50, 50, 0, 0, 50, 50, 50, 100, 50, 50, 50, 50, 50, 50, 0, 100, 100, 100, 50, 50, 50, 0]],[[0, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 50, 50, 50, 50, 50, 100, 50, 50, 50, 100, 150, 50, 100, 0, 0, 0]],[[0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 100, 100, 50, 50, 50, 50, 50, 50, 100, 100, 0, 0, 100, 100]],[[0, 0, 0, 0, 0, 100, 100, 100, 100, 50, 50, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 100, 100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0]],[[0, 0, 0, 0, 100, 100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0]],[[0, 0, 0, 0, 200, 200, 150, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 150, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0]],[[0, 100, 100, 150, 150, 150, 100, 50, 50, 50, 50, 100, 100, 50, 50, 50, 50, 150, 100, 0, 0, 0, 50, 50, 50, 0, 0, 0]],[[0, 100, 100, 50, 100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 0, 0, 50, 100, 150, 50, 100, 50, 50, 100, 0, 0, 0, 0]],[[50, 50, 50, 50, 100, 100, 100, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50, 150, 100, 100, 0, 100, 150, 150, 0, 0, 0]],[[50, 50, 100, 50, 100, 50, 50, 100, 0, 0, 50, 50, 50, 50, 50, 100, 50, 50, 100, 150, 150, 150, 150, 150, 150, 0, 0, 0]],[[50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 150, 150, 200, 200, 200, 0, 0, 0, 0]],[[0, 50, 50, 50, 50, 50, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 150, 150, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 100, 50, 50, 0, 0, 50, 50, 100, 100, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50, 0, 0, 0, 100, 50, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_psrec.tif to javascript
var pts_psrec = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 150, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 50, 0, 0, 150, 150, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 100, 150, 100, 100, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 150, 100, 100, 100, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 150, 150, 150, 100, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 100, 100, 150, 150, 100, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 100, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 150, 150, 100, 50, 50, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 150, 150, 150, 150, 0, 50, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 150, 150, 0, 0, 50, 0, 0, 50, 50]],[[0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 200, 200, 100, 0, 0, 200, 100, 100, 0, 0, 0, 0, 0, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 50, 50, 100, 100, 100, 0, 0, 50, 50, 150, 200, 50, 0, 0, 0, 0, 100, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 50, 50, 0, 0, 0, 0, 50, 200, 150, 200, 100, 100, 150, 0, 0, 0, 50, 100, 0, 50, 0, 0, 50, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 200, 150, 50, 200, 50, 50, 150, 50, 0, 0, 0, 100, 50, 50, 0, 0, 150, 150, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 100, 150, 0, 0, 200, 200, 150, 200, 100, 50, 0, 0, 0, 150, 100, 100, 150, 150, 150, 0, 0, 0]],[[0, 0, 0, 0, 0, 200, 150, 0, 0, 0, 150, 150, 150, 150, 150, 0, 0, 0, 0, 100, 150, 200, 200, 200, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 100, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 100, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_aghq.tif to javascript
var pts_aghq = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 25, 25, 25, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 125, 75, 125, 125, 175, 225, 225, 225, 225, 75, 225, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 125, 75, 125, 125, 175, 225, 225, 225, 175, 125, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 175, 125, 75, 75, 125, 125, 225, 225, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 225, 225, 125, 225, 225, 125, 75, 225, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 225, 225, 225, 125, 225, 175, 225, 75, 125, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 175, 225, 225, 125, 125, 175, 225, 225, 225, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 25, 225, 225, 225, 125, 225, 225, 125, 75, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 225, 225, 225, 125, 225, 225, 125, 25, 75, 225, 225, 125, 0, 0]],[[0, 0, 0, 0, 0, 25, 25, 125, 0, 25, 225, 225, 225, 75, 125, 175, 225, 125, 225, 225, 125, 75, 25, 75, 225, 125, 75, 25]],[[0, 0, 0, 0, 0, 25, 25, 125, 225, 25, 25, 25, 125, 75, 125, 75, 75, 75, 125, 125, 125, 75, 25, 225, 75, 25, 25, 25]],[[0, 0, 0, 0, 25, 25, 25, 25, 75, 75, 175, 225, 225, 125, 125, 125, 125, 225, 225, 225, 75, 125, 175, 75, 25, 25, 25, 25]],[[0, 0, 0, 0, 0, 25, 25, 25, 25, 225, 75, 75, 75, 75, 225, 175, 75, 225, 225, 225, 225, 125, 225, 25, 125, 125, 25, 25]],[[0, 0, 0, 0, 0, 25, 25, 25, 25, 125, 225, 225, 75, 125, 75, 125, 25, 225, 225, 225, 175, 75, 75, 175, 125, 225, 0, 0]],[[0, 0, 0, 0, 25, 25, 25, 25, 25, 75, 225, 225, 125, 225, 225, 225, 75, 75, 75, 75, 75, 75, 125, 225, 75, 0, 0, 0]],[[0, 0, 0, 0, 25, 25, 25, 25, 225, 225, 225, 225, 125, 225, 225, 125, 75, 25, 75, 175, 225, 125, 225, 225, 125, 0, 0, 0]],[[0, 125, 125, 25, 25, 25, 25, 25, 25, 75, 25, 75, 75, 75, 75, 75, 225, 25, 125, 75, 25, 25, 125, 125, 75, 0, 0, 0]],[[0, 125, 125, 25, 25, 25, 25, 225, 75, 175, 175, 125, 225, 175, 75, 125, 225, 75, 25, 175, 125, 125, 175, 75, 0, 0, 0, 0]],[[125, 125, 125, 25, 25, 25, 25, 225, 125, 225, 225, 125, 225, 125, 225, 125, 225, 225, 25, 125, 125, 25, 175, 25, 25, 0, 0, 0]],[[225, 225, 125, 25, 25, 25, 25, 75, 0, 0, 225, 75, 75, 125, 125, 75, 225, 225, 125, 25, 25, 25, 25, 25, 25, 0, 0, 0]],[[25, 25, 75, 175, 25, 175, 175, 0, 0, 0, 75, 75, 225, 225, 125, 125, 225, 225, 225, 25, 25, 25, 25, 25, 0, 0, 0, 0]],[[0, 225, 175, 225, 225, 225, 0, 0, 0, 0, 75, 75, 225, 225, 125, 75, 125, 225, 125, 25, 25, 25, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 125, 225, 175, 25, 25, 75, 75, 75, 75, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 225, 125, 75, 75, 75, 125, 75, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 175, 125, 75, 125, 125, 125, 125, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 225, 225, 125, 225, 225, 225, 225, 125, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 175, 225, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 225, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_agwq.tif to javascript
var pts_agwq = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 25, 25, 75, 75, 75, 75, 75, 75, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 25, 25, 25, 25, 25, 25, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 25, 25, 75, 75, 75, 25, 25, 25, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 75, 75, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 125, 125, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 25, 25, 25, 25, 75, 25, 25, 75, 75, 125, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 25, 75, 25, 25, 25, 75, 25, 25, 25, 25, 75, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 125, 125, 25, 25, 25, 75, 25, 25, 25, 25, 75, 75, 75, 25, 0, 0]],[[0, 0, 0, 0, 0, 25, 25, 75, 0, 25, 75, 75, 75, 75, 75, 75, 25, 75, 25, 25, 25, 75, 75, 75, 75, 25, 75, 25]],[[0, 0, 0, 0, 0, 25, 25, 75, 75, 25, 25, 25, 25, 75, 125, 75, 75, 75, 75, 75, 75, 75, 25, 25, 75, 25, 25, 25]],[[0, 0, 0, 0, 25, 25, 25, 175, 75, 25, 25, 75, 75, 75, 75, 25, 75, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25, 25]],[[0, 0, 0, 0, 0, 25, 25, 175, 125, 25, 75, 75, 25, 25, 25, 25, 75, 25, 25, 25, 75, 75, 25, 25, 25, 25, 25, 25]],[[0, 0, 0, 0, 0, 125, 125, 175, 175, 25, 75, 75, 25, 75, 75, 75, 75, 25, 25, 25, 25, 75, 75, 25, 75, 75, 0, 0]],[[0, 0, 0, 0, 125, 125, 125, 175, 225, 225, 225, 225, 225, 175, 125, 75, 75, 25, 75, 75, 125, 125, 75, 75, 75, 0, 0, 0]],[[0, 0, 0, 0, 25, 25, 125, 175, 25, 75, 125, 75, 125, 225, 125, 125, 75, 75, 75, 25, 125, 125, 75, 75, 125, 0, 0, 0]],[[0, 75, 75, 25, 25, 25, 125, 125, 75, 125, 125, 125, 125, 225, 75, 125, 25, 175, 175, 125, 125, 125, 125, 125, 125, 0, 0, 0]],[[0, 75, 75, 75, 125, 125, 25, 75, 75, 75, 125, 125, 75, 175, 75, 75, 175, 225, 175, 75, 75, 75, 125, 75, 0, 0, 0, 0]],[[125, 125, 125, 125, 125, 125, 75, 125, 75, 75, 75, 125, 75, 225, 225, 225, 225, 225, 225, 175, 25, 75, 25, 75, 75, 0, 0, 0]],[[25, 25, 125, 75, 125, 125, 125, 75, 0, 0, 125, 125, 125, 75, 125, 75, 175, 25, 175, 225, 125, 175, 175, 125, 25, 0, 0, 0]],[[75, 75, 125, 125, 125, 125, 125, 0, 0, 0, 125, 125, 125, 75, 75, 75, 225, 175, 25, 225, 225, 225, 225, 175, 0, 0, 0, 0]],[[0, 75, 125, 125, 125, 125, 0, 0, 0, 0, 75, 75, 75, 25, 75, 175, 225, 25, 75, 225, 175, 25, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 125, 75, 25, 175, 225, 175, 75, 75, 225, 75, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 175, 225, 25, 25, 25, 25, 225, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 225, 75, 75, 75, 75, 25, 225, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 75, 75, 75, 25, 25, 175, 225, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 25, 25, 225, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 75, 75, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_past_ps.tif to javascript
var pts_past_ps = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 150, 150, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 250, 200, 150, 150, 150, 150, 150, 150, 200, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 250, 200, 150, 250, 150, 100, 50, 200, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 100, 250, 200, 150, 150, 150, 50, 100, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 100, 50, 100, 50, 50, 150, 150, 150, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 150, 50, 100, 100, 50, 100, 150, 200, 100, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 150, 150, 150, 100, 50, 50, 150, 250, 200, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 250, 150, 100, 100, 150, 100, 50, 50, 250, 150, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 250, 250, 250, 250, 100, 150, 200, 50, 50, 50, 250, 100, 150, 200, 150, 0, 0]],[[0, 0, 0, 0, 0, 250, 250, 250, 0, 50, 200, 200, 200, 250, 250, 250, 250, 200, 150, 150, 50, 150, 200, 250, 200, 150, 150, 50]],[[0, 0, 0, 0, 0, 250, 250, 250, 100, 50, 50, 50, 100, 150, 200, 100, 250, 250, 100, 250, 200, 50, 200, 150, 100, 100, 50, 50]],[[0, 0, 0, 0, 250, 250, 250, 50, 200, 250, 150, 100, 150, 200, 250, 50, 100, 200, 100, 200, 250, 100, 50, 150, 100, 50, 50, 50]],[[0, 0, 0, 0, 0, 250, 250, 50, 50, 200, 250, 150, 250, 200, 150, 100, 50, 250, 200, 100, 250, 200, 50, 100, 200, 150, 50, 50]],[[0, 0, 0, 0, 0, 50, 50, 50, 50, 100, 150, 100, 100, 250, 250, 200, 100, 250, 200, 150, 100, 100, 150, 150, 200, 150, 0, 0]],[[0, 0, 0, 0, 50, 50, 50, 50, 50, 100, 50, 100, 100, 100, 200, 250, 250, 250, 200, 250, 250, 150, 200, 200, 250, 0, 0, 0]],[[0, 0, 0, 0, 250, 250, 100, 50, 100, 250, 150, 150, 150, 50, 200, 100, 250, 100, 250, 150, 150, 200, 200, 200, 150, 0, 0, 0]],[[0, 200, 200, 250, 250, 250, 100, 50, 100, 100, 200, 250, 100, 100, 150, 200, 250, 50, 250, 250, 150, 100, 150, 200, 150, 0, 0, 0]],[[0, 200, 200, 50, 50, 50, 50, 100, 250, 200, 250, 150, 150, 200, 150, 150, 250, 150, 50, 250, 250, 150, 200, 100, 0, 0, 0, 0]],[[200, 200, 200, 50, 50, 50, 50, 250, 200, 100, 250, 100, 100, 200, 100, 150, 200, 250, 50, 50, 100, 200, 150, 50, 100, 0, 0, 0]],[[250, 250, 200, 50, 50, 50, 150, 200, 0, 0, 250, 250, 200, 250, 150, 200, 200, 150, 200, 50, 50, 50, 50, 50, 50, 0, 0, 0]],[[250, 250, 200, 50, 50, 250, 200, 0, 0, 0, 200, 200, 200, 200, 200, 100, 100, 100, 250, 50, 50, 50, 50, 50, 0, 0, 0, 0]],[[0, 250, 250, 150, 100, 100, 0, 0, 0, 0, 100, 100, 100, 150, 200, 250, 150, 150, 200, 50, 50, 250, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 150, 50, 150, 150, 150, 250, 250, 100, 200, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 50, 50, 150, 150, 200, 250, 250, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 100, 200, 150, 200, 150, 250, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 200, 150, 100, 150, 250, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 100, 100, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 150, 150, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_pshq.tif to javascript
var pts_pshq = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 50, 100, 100, 150, 200, 200, 200, 200, 50, 200, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 50, 100, 100, 150, 200, 200, 200, 150, 100, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 150, 100, 50, 50, 100, 100, 200, 200, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 200, 100, 200, 200, 100, 50, 200, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 200, 200, 100, 200, 150, 200, 50, 100, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 150, 200, 200, 100, 100, 150, 200, 200, 200, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 0, 200, 200, 200, 100, 200, 200, 100, 50, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 100, 200, 200, 100, 0, 50, 200, 200, 100, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 100, 0, 0, 200, 200, 200, 50, 100, 150, 200, 100, 200, 200, 100, 50, 0, 50, 200, 100, 50, 0]],[[0, 0, 0, 0, 0, 0, 0, 100, 200, 0, 0, 0, 100, 50, 100, 50, 50, 50, 100, 100, 100, 50, 0, 200, 50, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 150, 200, 200, 100, 100, 100, 100, 200, 200, 200, 50, 100, 150, 50, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 50, 50, 50, 200, 150, 50, 200, 200, 200, 200, 100, 200, 0, 100, 100, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 200, 200, 50, 100, 50, 100, 0, 200, 200, 200, 150, 50, 50, 150, 100, 200, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 200, 200, 100, 200, 200, 200, 50, 50, 50, 50, 50, 50, 100, 200, 50, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 200, 100, 200, 200, 100, 50, 0, 50, 150, 200, 100, 200, 200, 100, 0, 0, 0]],[[0, 100, 100, 0, 0, 0, 0, 0, 0, 50, 0, 50, 50, 50, 50, 50, 200, 0, 100, 50, 0, 0, 100, 100, 50, 0, 0, 0]],[[0, 100, 100, 0, 0, 0, 0, 200, 50, 150, 150, 100, 200, 150, 50, 100, 200, 50, 0, 150, 100, 100, 150, 50, 0, 0, 0, 0]],[[100, 100, 100, 0, 0, 0, 0, 200, 100, 200, 200, 100, 200, 100, 200, 100, 200, 200, 0, 100, 100, 0, 150, 0, 0, 0, 0, 0]],[[200, 200, 100, 0, 0, 0, 0, 50, 0, 0, 200, 50, 50, 100, 100, 50, 200, 200, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 50, 150, 0, 150, 150, 0, 0, 0, 50, 50, 200, 200, 100, 100, 200, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 200, 150, 200, 200, 200, 0, 0, 0, 0, 50, 50, 200, 200, 100, 50, 100, 200, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 200, 150, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 100, 50, 50, 50, 100, 50, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 150, 100, 50, 100, 100, 100, 100, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 200, 200, 100, 200, 200, 200, 200, 100, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 150, 200, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 200, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
// the following is generated by tif_to_js.py and converts the gis file pts_pswq.tif to javascript
var pts_pswq = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 50, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 50, 50, 100, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 0, 50, 0, 0, 0, 0, 50, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 100, 100, 0, 0, 0, 50, 0, 0, 0, 0, 50, 50, 50, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 50, 50, 50, 50, 50, 50, 0, 50, 0, 0, 0, 50, 50, 50, 50, 0, 50, 0]],[[0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 50, 100, 50, 50, 50, 50, 50, 50, 50, 0, 0, 50, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 150, 50, 0, 0, 50, 50, 50, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 150, 100, 0, 50, 50, 0, 0, 0, 0, 50, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 100, 100, 150, 150, 0, 50, 50, 0, 50, 50, 50, 50, 0, 0, 0, 0, 50, 50, 0, 50, 50, 0, 0]],[[0, 0, 0, 0, 100, 100, 100, 150, 200, 200, 200, 200, 200, 150, 100, 50, 50, 0, 50, 50, 100, 100, 50, 50, 50, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 100, 150, 0, 50, 100, 50, 100, 200, 100, 100, 50, 50, 50, 0, 100, 100, 50, 50, 100, 0, 0, 0]],[[0, 50, 50, 0, 0, 0, 100, 100, 50, 100, 100, 100, 100, 200, 50, 100, 0, 150, 150, 100, 100, 100, 100, 100, 100, 0, 0, 0]],[[0, 50, 50, 50, 100, 100, 0, 50, 50, 50, 100, 100, 50, 150, 50, 50, 150, 200, 150, 50, 50, 50, 100, 50, 0, 0, 0, 0]],[[100, 100, 100, 100, 100, 100, 50, 100, 50, 50, 50, 100, 50, 200, 200, 200, 200, 200, 200, 150, 0, 50, 0, 50, 50, 0, 0, 0]],[[0, 0, 100, 50, 100, 100, 100, 50, 0, 0, 100, 100, 100, 50, 100, 50, 150, 0, 150, 200, 100, 150, 150, 100, 0, 0, 0, 0]],[[50, 50, 100, 100, 100, 100, 100, 0, 0, 0, 100, 100, 100, 50, 50, 50, 200, 150, 0, 200, 200, 200, 200, 150, 0, 0, 0, 0]],[[0, 50, 100, 100, 100, 100, 0, 0, 0, 0, 50, 50, 50, 0, 50, 150, 200, 0, 50, 200, 150, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 100, 50, 0, 150, 200, 150, 50, 50, 200, 50, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 150, 200, 0, 0, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 200, 50, 50, 50, 50, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 0, 0, 150, 200, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 0, 0, 200, 0, 0, 0, 0, 0, 0, 0, 0, 0]],[[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
