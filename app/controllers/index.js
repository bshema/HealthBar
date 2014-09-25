var foods = Alloy.Collections.foods;

function showId(e) {
	//$.activityInd.show();

	if (e.row.model) {
		alert(e.row.model);
	}

	//$.activityInd.hide();
}

foods.fetch();

$.index.open();

//doClick();
