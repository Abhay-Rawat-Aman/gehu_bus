<table>
	<?php
		for($i=0;$i<3;$i++)
		{
			echo "<tr>";
			for($j=0;$j<8;$j++)
			{?>
				<td style="padding-left:15px;padding-bottom:13px;">
					<!--<img src='../vacant_new_seat.png' style='height:35px;width:50px'>-->
					<img src='../vacant_new_seat.png' style='height:42px;width:75px'>
				</td>
			<?php
			}
			echo "</tr>";
		}
	?>
</table>
<br>
<table>
	<?php
		for($i=0;$i<2;$i++)
		{
			echo "<tr>";
			for($j=0;$j<8;$j++)
			{?>
				<td style="padding-left:15px;padding-bottom:13px;">
					<!--<img src='../vacant_new_seat.png' style='height:35px;width:50px'>-->
					<img src='../unpaid.png' style='height:42px;width:75px'>
				</td>
			<?php
			}
			echo "</tr>";
		}
	?>
</table>