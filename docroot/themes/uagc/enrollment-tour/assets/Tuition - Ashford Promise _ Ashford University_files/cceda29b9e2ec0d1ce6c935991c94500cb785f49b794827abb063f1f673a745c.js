window.optimizely.push({type:"load",data:{changes:[{"dependencies": [], "type": "custom_code", "id": "C4ED1824-473C-4EC2-AE27-C6BB68473BF0", "value": function($){var state = 'CA';
$('#edit-state').val(state);
$('#edit-state > option').find(":selected").prop('selected', false);
$("#edit-state option[value='" + state + "']").prop('selected', true);
}}]}});