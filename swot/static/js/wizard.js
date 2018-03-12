var type = "simple"

$(document).ready(function(){
    setupWizardCard();
    selectSwotType("simple");

    $('#strengths_help_button').hover(function(){
        $('#strengths_help_dropdown').toggle('show');
    },function(){
        $('#strengths_help_dropdown').toggle('show');
    });
    $('#weaknesses_help_button').hover(function(){
        $('#weaknesses_help_dropdown').toggle('show');
    },function(){
        $('#weaknesses_help_dropdown').toggle('show');
    });
    $('#opportunities_help_button').hover(function(){
        $('#opportunities_help_dropdown').toggle('show');
    },function(){
        $('#opportunities_help_dropdown').toggle('show');
    });
    $('#threats_help_button').hover(function(){
        $('#threats_help_dropdown').toggle('show');
    },function(){
        $('#threats_help_dropdown').toggle('show');
    });
});

function setProgressBarStage(stage)
{
    $('.progress_bar_item.active').toggleClass('active');
    $('#stage'+stage).toggleClass('active');
}

function selectSwotType(type_chosen)
{
    $('#stage0').off();
    $('#stage1').off();
    $('#stage2').off();
    $('#stage3').off();
    $('#stage4').off();
    $('#stage5').off();
    $('#stage6').off();
    document.getElementById("swotcard_name").setAttribute("swot_type", type_chosen);

    if(type_chosen == "simple")
    {
        $('#next_step_button').click(function() {
            resetWizardCards();
            strWizardCard();
        });

        if($('#create_advanced_button').hasClass('active')){
            $('#create_simple_button').toggleClass('active');
            $('#create_advanced_button').toggleClass('active');
        }

        $('#stage0').off();
        $('#stage1').off();
        $('#stage2').off();
        $('#stage3').off();
        $('#stage4').off();
        $('#stage5').off();
        $('#stage6').off();
        $('#stage0').click(function() {
            resetWizardCards();
            setupWizardCard();
        });
        $('#stage2').click(function() {
            resetWizardCards();
            strWizardCard();
        });
        $('#stage3').click(function() {
            resetWizardCards();
            weaWizardCard();
        });
        $('#stage4').click(function() {
            resetWizardCards();
            oppWizardCard();
        });
        $('#stage5').click(function() {
            resetWizardCards();
            thrWizardCard();
        });
        $('#stage6').click(function() {
            resetWizardCards();
            summaryWizardCard();
        });

        document.getElementById("stage1").style.display = "none";
        document.getElementById("stage2_text").innerHTML = "Strengths";
        document.getElementById("stage3_text").innerHTML = "Weaknesses";
        document.getElementById("stage4_text").innerHTML = "Opportunities";
        document.getElementById("stage5_text").innerHTML = "Threats";
    }
    else if(type_chosen == "advanced")
    {
        $('#next_step_button').click(function() {
            resetWizardCards();
            swotWizardCard();
        });

        if($('#create_simple_button').hasClass('active')){
            $('#create_simple_button').toggleClass('active');
            $('#create_advanced_button').toggleClass('active');
        }

        $('#stage0').click(function() {
            resetWizardCards();
            setupWizardCard();
        });
        $('#stage1').click(function() {
            resetWizardCards();
            swotWizardCard();
        });
        $('#stage2').click(function() {
            resetWizardCards();
            stroppWizardCard();
        });
        $('#stage3').click(function() {
            resetWizardCards();
            strthrWizardCard();
        });
        $('#stage4').click(function() {
            resetWizardCards();
            weaoppWizardCard();
        });
        $('#stage5').click(function() {
            resetWizardCards();
            weathrWizardCard();
        });
        $('#stage6').click(function() {
            resetWizardCards();
            summaryWizardCard(true);
        });

        document.getElementById("stage1").style.display = "block";
        document.getElementById("stage2_text").innerHTML = "Strengths & Opportunities";
        document.getElementById("stage3_text").innerHTML = "Strengths & Threats";
        document.getElementById("stage4_text").innerHTML = "Weaknesses & Opportunities";
        document.getElementById("stage5_text").innerHTML = "Weaknesses & Threats";
    }
}
function setupWizardCard()
{
    setProgressBarStage(0);
    $('#setup_wizard_card').show();

    $('#next_step_button').show();
    $('#prev_step_button').hide();
    $('#finish_step_button').hide();

    $('#next_step_button').click(function() {
        resetWizardCards();
        strWizardCard();
    });
    selectSwotType(document.getElementById("swotcard_name").getAttribute("swot_type"));
}

function strWizardCard()
{
    setProgressBarStage(2);
    $('#str_wizard_card').show();
    $('#str_wizard_card').append($('#strengths_div').show());

    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();

    $('#next_step_button').click(function() {
        resetWizardCards();
        weaWizardCard();
    });
    $('#prev_step_button').click(function() {
        resetWizardCards();
        setupWizardCard();
    });
}

function weaWizardCard()
{
    setProgressBarStage(3);
    $('#wea_wizard_card').show();
    $('#wea_wizard_card').append($('#weaknesses_div').show());

    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();

    $('#next_step_button').click(function() {
        resetWizardCards();
        oppWizardCard();
    });
    $('#prev_step_button').click(function() {
        resetWizardCards();
        strWizardCard();
    })
}

function oppWizardCard()
{
    setProgressBarStage(4);
    $('#opp_wizard_card').show();
    $('#opp_wizard_card').append($('#opportunities_div').show());
    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();
    $('#next_step_button').click(function() {
        resetWizardCards();
        thrWizardCard();
    });
    $('#prev_step_button').click(function() {
        resetWizardCards();
        weaWizardCard();
    });
}

function thrWizardCard()
{
    setProgressBarStage(5);
    $('#thr_wizard_card').show();
    $('#thr_wizard_card').append($('#threats_div').show());
    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();
    $('#next_step_button').click(function() {
        resetWizardCards();
        summaryWizardCard();
    })
    $('#prev_step_button').click(function() {
        resetWizardCards();
        oppWizardCard();
    });
}

function swotWizardCard()
{
    setProgressBarStage(1);
    $('#swot_wizard_card').show();
    $('#swot_wizard_card').append($('#strengths_div').show());
    $('#swot_wizard_card').append($('#weaknesses_div').show());
    $('#swot_wizard_card').append($('#opportunities_div').show());
    $('#swot_wizard_card').append($('#threats_div').show());

    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();

    $('#next_step_button').click(function() {
        resetWizardCards();
        stroppWizardCard();
    })
    $('#prev_step_button').click(function() {
        resetWizardCards();
        setupWizardCard();
    })
}

function stroppWizardCard()
{
    setProgressBarStage(2);
    $('.wizard_card').hide();
    $('#stropp_wizard_card').show();
    $('.swot_div').hide();
    $('#stropp_wizard_card').append($('#strengths_div').show());
    $('#stropp_wizard_card').append($('#opportunities_div').show());
    $('#stropp_wizard_card').append($('#str_opp_div').show());
    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();
    $('#next_step_button').click(function() {
        resetWizardCards();
        strthrWizardCard();
    })
    $('#prev_step_button').click(function() {
        resetWizardCards();
        swotWizardCard();
    });
}

function strthrWizardCard()
{
    setProgressBarStage(3);
    $('.wizard_card').hide();
    $('#strthr_wizard_card').show();
    $('.swot_div').hide();
    $('#strthr_wizard_card').append($('#strengths_div').show());
    $('#strthr_wizard_card').append($('#threats_div').show());
    $('#strthr_wizard_card').append($('#str_thr_div').show());
    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();
    $('#next_step_button').click(function() {
        resetWizardCards();
        weaoppWizardCard();
    })
    $('#prev_step_button').click(function() {
        resetWizardCards();
        stroppWizardCard();
    });
}

function weaoppWizardCard()
{
    setProgressBarStage(4);
    $('.wizard_card').hide();
    $('#weaopp_wizard_card').show();
    $('.swot_div').hide();
    $('#weaopp_wizard_card').append($('#weaknesses_div').show());
    $('#weaopp_wizard_card').append($('#opportunities_div').show());
    $('#weaopp_wizard_card').append($('#wea_opp_div').show());
    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();
    $('#next_step_button').click(function() {
        resetWizardCards();
        weathrWizardCard();
    })
    $('#prev_step_button').click(function() {
        resetWizardCards();
        strthrWizardCard();
    });
}

function weathrWizardCard()
{
    setProgressBarStage(5);
    $('.wizard_card').hide();
    $('#weathr_wizard_card').show();
    $('.swot_div').hide();
    $('#weathr_wizard_card').append($('#weaknesses_div').show());
    $('#weathr_wizard_card').append($('#threats_div').show());
    $('#weathr_wizard_card').append($('#wea_thr_div').show());
    $('#next_step_button').show();
    $('#prev_step_button').show();
    $('#finish_step_button').hide();
    $('#next_step_button').click(function() {
        resetWizardCards();
        summaryWizardCard(true);
    })
    $('#prev_step_button').click(function() {
        resetWizardCards();
        weaoppWizardCard();
    });
}

function summaryWizardCard(advanced)
{
    setProgressBarStage(6);
    $('#summary_wizard_card').show();
    $('#summary_wizard_card').append($('#strengths_div').show());
    $('#summary_wizard_card').append($('#weaknesses_div').show());
    $('#summary_wizard_card').append($('#opportunities_div').show());
    $('#summary_wizard_card').append($('#threats_div').show());
    $('#prev_step_button').click(function() {
        resetWizardCards();
        thrWizardCard();
    });
    if(advanced)
    {
         $('#threats_div').removeAttr('simple');
        $('#summary_wizard_card').append($('#str_opp_div').show());
        $('#summary_wizard_card').append($('#str_thr_div').show());
        $('#summary_wizard_card').append($('#wea_opp_div').show());
        $('#summary_wizard_card').append($('#wea_thr_div').show());
        $('#prev_step_button').off();
        $('#prev_step_button').click(function() {
            resetWizardCards();
            weathrWizardCard();
        });
    }
    else{
        $('#threats_div').attr('simple', 'true');
    }
    $('#next_step_button').hide();
    $('#prev_step_button').show();
    $('#finish_step_button').show();
    $('#finish_step_button').click(function() {
        resetWizardCards();
        strWizardCard();
    });
}

function resetWizardCards()
{
    //$('#threats_div').css('margin-bottom', '5px');
    $('.wizard_card').hide();
    $('.swot_div').hide();
    $('#next_step_button').off();
    $('#prev_step_button').off();
    $('#finish_step_button').off();
}

function resetWizard()
{
    resetWizardCards();
    setupWizardCard();
    selectSwotType('simple');

    document.getElementById("swotcard_name").innerHTML = "SWOT Analysis Title...";
    document.getElementById("card_name_input").value = "SWOT Analysis Title...";

    strengths = [], weakness = [], opportunities = [], threats = [];
	str_opp = [], str_thr = [], wea_opp = [], wea_thr = [];

    document.getElementById("strength_ul").innerHTML = "";
	document.getElementById("weakness_ul").innerHTML = "";
	document.getElementById("opportunities_ul").innerHTML = "";
	document.getElementById("threat_ul").innerHTML = "";
	document.getElementById("str_opp_ul").innerHTML = "";
	document.getElementById("str_thr_ul").innerHTML = "";
	document.getElementById("wea_opp_ul").innerHTML = "";
	document.getElementById("wea_thr_ul").innerHTML = "";

}